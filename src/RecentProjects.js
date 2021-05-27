function RecentProjects() {
  return (
    <div>
      <br />
      <span className="project-header">
        <a
          href="https://github.com/JAYKALIA007/project-manager-1.0"
          target="_blank"
        >
          project-manager-1.0
        </a>
        <p>
          A project management tool where you can share the details of the
          project that you are currently working on, and be updated with what
          the others are upto.
        </p>
      </span>

      <span className="project-header">
        <a
          href="https://github.com/JAYKALIA007/movie-search-app"
          target="_blank"
        >
          movie-search-app
        </a>
        <p>
          A React movie search app wherein a user can type in a query of some
          sort and get results accordingly.
        </p>
      </span>

      <span className="project-header">
        <a href="https://github.com/JAYKALIA007/CHATCORD" target="_blank">
          CHATCORD
        </a>
        <p>
          A realtime chat app with websockets using Node.js, Express and
          Socket.io with Vanilla JS on the frontend with a custom UI.
        </p>
      </span>
      <br />
      <a
        href="https://github.com/JAYKALIA007?tab=repositories&q=&type=&language=&sort="
        style={{
          color: "#60b4a6",
          textDecoration: "underline",
          fontWeight: "bold",
        }}
      >
        View All Projects
      </a>
      <br />
      <br />
      <hr />
    </div>
  );
}
export default RecentProjects;
