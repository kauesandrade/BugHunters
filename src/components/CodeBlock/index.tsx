'use client'
import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js/lib/core'
import c from 'highlight.js/lib/languages/c'
import { useEffect, useRef } from 'react';
hljs.registerLanguage('c', c)

export type CodeBlockProps = {
    code: string;
}

const CodeBlock = ({code}: CodeBlockProps) => {
    const codeRef = useRef(null);
    // const highlightedCode = hljs.highlight(code, { language: 'c' }).value
    
    useEffect(() => {
        if (!codeRef.current) return;

        hljs.highlightElement(codeRef.current);
    }, [])
    return (
        <pre className="px-14 py-10 rounded-3xl bg-[#27242C]">
            <code className={"!bg-[inherit] hljs language-c"} ref={codeRef} 
            // dangerouslySetInnerHTML={{__html: highlightedCode}}
            >
                {code}
            </code>
        </pre>
    )
}

export default CodeBlock;