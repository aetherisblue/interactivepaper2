import katex from "katex";

type TexProps = {
  children: string;
  i?: boolean;
  numbered?: string;
};

export function Tex({ children, i = false, numbered }: TexProps) {
  const html = katex.renderToString(children, {
    displayMode: !i,
    throwOnError: false,
    trust: false,
    strict: "ignore",
  });
  if (i) {
    return (
      <span
        className="[&_.katex]:text-[1.02em]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <div className="eq" role="img" aria-label={children}>
      <div className="eq-body" dangerouslySetInnerHTML={{ __html: html }} />
      {numbered ? <span className="eq-num">({numbered})</span> : null}
    </div>
  );
}
