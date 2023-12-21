export default function RightBar() {
  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <div className="bg-slate-900 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-amber-200">Profile</h2>
        <p>
          Having completed a full-stack flex web dev bootcamp, Joshua Kellogg
          now roams the land, always on the hunt for interesting projects to
          tackle. He is currently in the process of <i>finally</i> making the
          personal site you're looking at now, as well as working through{" "}
          <a>Bob Nystrom's Crafting Interpreters</a>, which has been a fun time.
        </p>
      </div>
      {/* <div className="bg-slate-900 p-4 rounded-lg"></div> */}
    </div>
  );
}
