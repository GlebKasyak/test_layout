import { ButtonsGroup, Card } from "./components/molecules"

import { first, second, third } from "./cardData"
import "./assets/styles/app.scss"

function App() {
    return (
        <main className="app">
            <nav className="navigation">
                <ButtonsGroup buttons={["Monthly", "Annual"]} />
            </nav>
            <div className="cards">
                <Card price={59} features={first} tagText="starter" />
                <Card price={89} features={second} tagText="premium" />
                <Card price={99} features={third} tagText="enterprise" />
            </div>
        </main>
    );
}

export default App;
