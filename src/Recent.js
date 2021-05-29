import RecentBlogs from "./Blogs/RecentBlogs";
import RecentProjects from "./RecentProjects";
function Recent() {
  return (
    <div>
      <header>Blogs</header>
      <RecentBlogs />
      <hr />
      <header>Projects</header>
      <RecentProjects />
    </div>
  );
}
export default Recent;
