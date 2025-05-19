import CodeBlock, { CodeBlockProps } from "../CodeBlock"


type SolutionBlockProps = {
    title: string
} & CodeBlockProps

const SolutionBlock = ({title, code}: SolutionBlockProps) => {
  return (
    <details className="bg-[#302B28] rounded-xl">
        <summary className="text-orange px-2 py-3 select-none cursor-pointer"><span className="text-white">{title}</span></summary>
        <div className="p-2">
            <CodeBlock code={code}/>
        </div>
    </details>
  )
}

export default SolutionBlock