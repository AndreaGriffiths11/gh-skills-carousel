#!/usr/bin/env node

const fs = require('fs');

const cards = [
    {
        number: '01',
        title: 'What are agent skills?',
        content: '<strong>Instruction sets that teach AI coding agents specialized tasks.</strong><br><br>Work across Copilot, Claude Code, Cursor, and Codex. Think of them as focused documentation that agents can actually follow.'
    },
    {
        number: '02',
        title: 'The missing piece was distribution',
        content: '<strong>Copying files manually like it\'s 2012.</strong><br><br>gh skill fixes that. No more hunting through GitHub repos, copying markdown files, or managing versions by hand.'
    },
    {
        number: '03',
        title: 'How it works',
        content: 'Install skills from any GitHub repo:<div class="code-snippet">gh skill install github/awesome-copilot documentation-writer</div>Keep everything updated:<div class="code-snippet">gh skill update --all</div><strong>Pin to tags or commits. Provenance travels with the file.</strong>'
    },
    {
        number: '04',
        title: 'Supply chain hygiene',
        content: '<strong>Skills aren\'t verified by GitHub and may contain prompt injections.</strong><br><br>Use <code>gh skill preview</code> before installing. Same hygiene as npm packages, newer attack vectors.'
    },
    {
        number: '05',
        title: 'What was missing',
        content: '<strong>The SKILL.md pattern has been spreading across the agent ecosystem.</strong><br><br>What we needed: proper tooling for version management, dependency graphs, and integrity checks.'
    },
    {
        number: '06',
        title: 'Standards before speed',
        content: '<strong>Start with skills from github/awesome-copilot.</strong><br><br>Build what you wish existed. Every time. Quality over quantity, fundamentals over features.'
    },
    {
        number: '07',
        title: 'This one\'s headed somewhere good',
        content: '<strong>Agent skills are the infrastructure layer for AI-assisted development.</strong><br><br>We\'re building the distribution, you build the skills. Ship better code with fundamentals that scale.'
    }
];

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Skills Card {{number}} - {{title}}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', system-ui, sans-serif;
            background-color: #f8fafc;
            background-image:
                radial-gradient(circle at top left, rgba(3, 7, 18, 0.06), transparent 55%),
                linear-gradient(180deg, rgba(14, 165, 233, 0.08), transparent 65%);
            padding: 40px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .card {
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(226, 232, 240, 0.6);
            border-radius: 24px;
            padding: 3rem;
            box-shadow: 0 24px 48px -40px rgba(15, 23, 42, 0.25);
            backdrop-filter: blur(10px);
            width: 600px;
            height: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2rem;
        }
        
        .card-number {
            background: rgba(15, 23, 42, 0.08);
            color: #030712;
            padding: 6px 14px;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: 0.14em;
        }
        
        .github-logo {
            width: 40px;
            height: 40px;
            background: #030712;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            font-size: 0.875rem;
        }
        
        .card-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .card-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #030712;
            margin-bottom: 1.5rem;
            line-height: 1.1;
        }
        
        .card-text {
            font-size: 1.25rem;
            color: #475569;
            line-height: 1.6;
        }
        
        .card-text strong {
            color: #030712;
            font-weight: 600;
        }
        
        .code-snippet {
            background: #f1f5f9;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 1rem;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
            font-size: 1rem;
            margin: 1rem 0;
            color: #030712;
        }
        
        code {
            background: #f1f5f9;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
            font-size: 1rem;
            color: #030712;
        }
        
        .card-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(226, 232, 240, 0.6);
        }
        
        .footer-text {
            font-size: 0.875rem;
            color: #64748b;
            font-weight: 500;
        }
        
        .skill-badge {
            background: #030712;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.875rem;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-header">
            <div class="card-number">{{number}} / 07</div>
            <div class="github-logo">GH</div>
        </div>
        
        <div class="card-content">
            <h2 class="card-title">{{title}}</h2>
            <div class="card-text">
                {{content}}
            </div>
        </div>
        
        <div class="card-footer">
            <div class="footer-text">gh skill shipped April 16</div>
            <div class="skill-badge">GitHub CLI v2.90.0+</div>
        </div>
    </div>
</body>
</html>`;

// Generate all cards
cards.forEach((card) => {
    const html = template
        .replace(/{{number}}/g, card.number)
        .replace(/{{title}}/g, card.title)
        .replace(/{{content}}/g, card.content);
    
    const filename = `social-card-${card.number}.html`;
    fs.writeFileSync(filename, html);
    console.log(`✓ Generated ${filename}`);
});

console.log(`\\n🎉 Generated ${cards.length} social media cards!`);
console.log('Each card is 600x600px and self-contained for easy screenshot sharing.');
console.log('\\nTo use:');
console.log('1. Open each HTML file in browser');
console.log('2. Screenshot at 600x600px');
console.log('3. Upload to LinkedIn/Instagram');