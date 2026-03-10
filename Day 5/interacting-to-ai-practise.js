import { Pool } from 'undici'

const ollamaPool = new Pool('http://localhost:11434', {
    connections: 10
})

async function streamOllamaCompletion(prompt) {
    const { statusCode, body } = await ollamaPool.request({
        path: '/api/generate',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, model: 'mistral' })
    })

    if (statusCode !== 200) {
        await body.dump();
        throw new Error(`Ollama request failed with status code ${statusCode}`)
    }

    let partial = '';
    const decoder = new TextDecoder();
    let fullResponse = '';

    for await (const chunk of body) {
        partial += decoder.decode(chunk, { stream: true });
        
        // Split by newlines to handle NDJSON format
        const lines = partial.split('\n');
        
        // Keep the last incomplete line in partial
        partial = lines[lines.length - 1];
        
        // Process complete lines
        for (let i = 0; i < lines.length - 1; i++) {
            if (lines[i].trim()) {
                try {
                    const jsonLine = JSON.parse(lines[i]);
                    
                    // Extract response text from Ollama response
                    if (jsonLine.response) {
                        process.stdout.write(jsonLine.response); // Stream output
                        fullResponse += jsonLine.response;
                    }
                    
                    // Check if streaming is complete
                    if (jsonLine.done) {
                        console.log('\n\nStreaming Complete');
                    }
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            }
        }
    }

    // Handle final partial line if exists
    if (partial.trim()) {
        try {
            const jsonLine = JSON.parse(partial);
            if (jsonLine.response) {
                process.stdout.write(jsonLine.response);
                fullResponse += jsonLine.response;
            }
        } catch (e) {
            console.error('Error parsing final JSON:', e);
        }
    }

    return fullResponse;
}

try {
    const result = await streamOllamaCompletion('What is a rat? Explain');
    console.log('\n\nFull Response:', result);
} catch (error) {
    console.error('Error calling Ollama:', error)
} finally {
    console.log('Closing Ollama Pool.')
    await ollamaPool.close();
}
