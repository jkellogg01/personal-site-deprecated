export default function Article(props: { path: string }) {
  return (
    <embed
      className="w-full h-full bg-slate-900 rounded-lg"
      src={props.path}
      type="text/markdown"
    />
  );
}
