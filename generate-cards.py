#!/usr/bin/env python3
"""
Generate individual GitHub Skills cards for social media sharing
"""

cards_data = [
    {
        "number": "01",
        "title": "What are agent skills?",
        "content": "<strong>Instruction sets that teach AI coding agents specialized tasks.</strong><br><br>Work across Copilot, Claude Code, Cursor, and Codex. Think of them as focused documentation that agents can actually follow.",
        "cta": '<a href="https://agents.md" class="slide-cta" target="_blank">Agent Skills Spec →</a>'
    },
    {
        "number": "02", 
        "title": "The missing piece was distribution",
        "content": "<strong>Copying files manually like it's 2012.</strong><br><br>gh skill fixes that. No more hunting through GitHub repos, copying markdown files, or managing versions by hand.",
        "cta": ""
    },
    {
        "number": "03",
        "title": "How it works", 
        "content": 'Install skills from any GitHub repo:<div class="code-snippet">gh skill install github/awesome-copilot documentation-writer</div>Keep everything updated:<div class="code-snippet">gh skill update --all</div><strong>Pin to tags or commits. Provenance travels with the file.</strong>',
        "cta": ""
    },
    {
        "number": "04",
        "title": "Supply chain hygiene",
        "content": "<strong>Skills aren't verified by GitHub and may contain prompt injections.</strong><br><br>Use <code>gh skill preview</code> before installing. Same hygiene as npm packages, newer attack vectors.",
        "cta": ""
    },
    {
        "number": "05", 
        "title": "What was missing",
        "content": "<strong>The SKILL.md pattern has been spreading across the agent ecosystem.</strong><br><br>What we needed: proper tooling for version management, dependency graphs, and integrity checks.",
        "cta": ""
    },
    {
        "number": "06",
        "title": "Standards before speed",
        "content": "<strong>Start with skills from github/awesome-copilot.</strong><br><br>Build what you wish existed. Every time. Quality over quantity, fundamentals over features.",
        "cta": '<a href="https://github.com/github/awesome-copilot" class="slide-cta" target="_blank">Awesome Copilot →</a>'
    },
    {
        "number": "07",
        "title": "This one's headed somewhere good", 
        "content": "<strong>Agent skills are the infrastructure layer for AI-assisted development.</strong><br><br>We're building the distribution, you build the skills. Ship better code with fundamentals that scale.",
        "cta": '<a href="https://mainbranch.dev" class="slide-cta" target="_blank">Main Branch Newsletter →</a>'
    }
]

html_template = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Skills Card {number} - {title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        :root {{
            --color-accent: #030712;
            --color-accent-strong: #1e293b;
            --color-surface: rgba(255, 255, 255, 0.95);
        }}

        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: 'Inter', system-ui, sans-serif;
            background-color: #f8fafc;
            background-image:
                radial-gradient(circle at top left, rgba(3, 7, 18, 0.06), transparent 55%),
                linear-gradient(180deg, rgba(14, 165, 233, 0.08), transparent 65%);
            color: #0f172a;
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }}
        
        .card {{
            background: var(--color-surface);
            border: 1px solid rgba(226, 232, 240, 0.6);
            border-radius: 24px;
            padding: 3rem;
            box-shadow: 0 24px 48px -40px rgba(15, 23, 42, 0.25);
            backdrop-filter: blur(10px);
            width: 600px;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }}
        
        .slide-number {{
            font-size: 0.875rem;
            color: #94a3b8;
            font-weight: 500;
            margin-bottom: 1rem;
            letter-spacing: 0.05em;
        }}
        
        .slide-title {{
            font-size: 2rem;
            font-weight: 700;
            color: var(--color-accent);
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }}
        
        .slide-content {{
            font-size: 1.125rem;
            color: #475569;
            line-height: 1.7;
            margin-bottom: 2rem;
        }}
        
        .slide-content strong {{
            color: var(--color-accent);
            font-weight: 600;
        }}
        
        .code-snippet {{
            background: #f1f5f9;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 1rem;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
            font-size: 0.875rem;
            margin: 1rem 0;
            color: var(--color-accent);
        }}
        
        .slide-cta {{
            display: inline-flex;
            align-items: center;
            background: var(--color-accent);
            color: white;
            padding: 0.875rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
            align-self: flex-start;
        }}
        
        .slide-cta:hover {{
            background: var(--color-accent-strong);
        }}
        
        code {{
            background: #f1f5f9;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
            font-size: 0.875rem;
        }}
    </style>
</head>
<body>
    <div class="card">
        <div class="slide-number">{number} / 07</div>
        <h2 class="slide-title">{title}</h2>
        <div class="slide-content">
            {content}
        </div>
        {cta}
    </div>
</body>
</html>'''

# Generate all cards
for i, card in enumerate(cards_data, 1):
    filename = f"gh-skills-card-{card['number']}.html"
    html_content = html_template.format(
        number=card['number'],
        title=card['title'], 
        content=card['content'],
        cta=card['cta']
    )
    
    with open(filename, 'w') as f:
        f.write(html_content)
    
    print(f"✓ Generated {filename}")

print(f"\\n🎉 Generated {len(cards_data)} individual cards!")
print("Each card is optimized for 600x400px screenshots for social media.")