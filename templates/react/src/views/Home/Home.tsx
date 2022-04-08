import "./Home.css";

interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className="site-container">
      <header className="site-header w-full h-10">
        <div className="container h-full mx-auto"></div>
      </header>

      <main className="site-main">
        <div className="container h-full mx-auto overflow-hidden">Home</div>
      </main>

      <footer className="site-footer w-full h-10">
        <div className="container h-full mx-auto"></div>
      </footer>
    </div>
  );
}
