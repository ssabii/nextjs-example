import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <div>
            <NavBar />
            <h1 className="active">Home</h1>
            <style jsx>{`
                a {
                    color: white;
                }
            `}</style>
        </div>
    );
}
