import React, { useState } from 'react';
import './App.css';

function App() {
  const [locais, setLocais] = useState([
    { id: 1, nome: "Restaurante Central", rampa: true, banheiro: true },
    { id: 2, nome: "Farmácia Popular", rampa: true, banheiro: false }
  ]);

  return (
    <div className="container">
      <header>
        <h1>Acesso Livre CG</h1>
        <p>Guia de Acessibilidade em Campo Grande</p>
      </header>

      <main>
        <section className="formulario">
          <h2>Cadastrar Novo Local</h2>
          <form>
            <label htmlFor="nome">Nome do Local:</label>
            <input type="text" id="nome" placeholder="Ex: Padaria do Zé" required />
            
            <div className="checkboxes">
              <label><input type="checkbox" /> Possui Rampa?</label>
              <label><input type="checkbox" /> Banheiro Adaptado?</label>
            </div>
            
            <button type="submit">Salvar Local</button>
          </form>
        </section>

        <section className="lista">
          <h2>Locais Mapeados</h2>
          <ul>
            {locais.map(local => (
              <li key={local.id} className="card">
                <h3>{local.nome}</h3>
                <p>{local.rampa ? "✅ Rampa" : "❌ Sem Rampa"}</p>
                <p>{local.banheiro ? "✅ Banheiro PCD" : "❌ Sem Banheiro"}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;