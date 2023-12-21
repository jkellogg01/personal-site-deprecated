export default function Profile() {
  return (
    <div className="bg-slate-900 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold text-amber-200">Profile</h2>
      <p>
        Having completed a full-stack flex web dev bootcamp, Joshua Kellogg now
        roams the land, always on the hunt for interesting projects to tackle.
        He is currently in the process of <i>finally</i> making the personal
        site you're looking at now, as well as working through{" "}
        <a
          href="https://craftinginterpreters.com/"
          className="text-amber-100 underline"
        >
          Bob Nystrom's Crafting Interpreters
        </a>
        , which has been a fun time.
      </p>
    </div>
  );
}
