import React from "react";
import "./Instructions.css";
import Header from "../layout/Header";

class NewWordsInstruction extends React.Component {
  handleNext = e => {
    e.preventDefault();
    this.props.incrementSubcounter();
  };

  render() {
    return (
      <div>
        <Header />
        <div className="home-content">
          <div className="right">
            <p>
              In dem folgenden Abschnitt sollen Sie aus den vorgegebenen
              Buchstaben deutsche Wörter bilden, sodass im Idealfall kein
              einziger Buchstabe übrig bleibt. Jeder vorgegebene Buchstabe darf
              nur einmal verwendet werden. Die von Ihnen gebildeten deutschen
              Wörter werden als gültig gewertet, wenn sie{" "}
              <span>korrekt geschrieben sind</span>. Insgesamt werden Sie{" "}
              <span>vier</span> Aufgaben mit jeweils unterschiedlichen
              Buchstaben bearbeiten. Für jede Aufgabe haben Sie{" "}
              <span>drei Minuten Zeit</span>, danach gilt sie als beendet.{" "}
              <span>
                Versuchen Sie, so viele Buchstaben wie möglich zu nutzen und
                dabei deutsche Wörter zu bilden, die möglich sind, aber nicht
                jedem einfallen
              </span>
              .
              <br />
              <br />
              Um Sie mit der Aufgabenstellung vertraut zu machen, ist unten eine
              Beispielaufgabe abgebildet. Klicken Sie im Anschluss beim
              Bearbeiten der Aufgaben auf oder über die blaue Linie, um ein
              gebildetes Wort mittels <span>Ihrer Computertastatur</span>{" "}
              einzugeben (ein Mausklick auf den jeweiligen Buchstaben ist nicht
              möglich). Die verwendeten Buchstaben ergrauen automatisch, sodass
              Sie jederzeit wissen, welche Buchstaben noch verfügbar sind.{" "}
              <span>
                Ein neues Wort können Sie über das “+”-Symbol erstellen
              </span>
              . Sofern Sie die Aufgabe vor dem Ablauf der drei Minuten beendet
              haben, erreichen Sie die Nächste über den Button “Nächste
              Aufgabe”. Sobald die drei Minuten abgelaufen sind, wird die
              nächste Aufgabe automatisch gestartet.
              <br />
              <br />
              <img
                src="/images/Item_7_0.png"
                width="500"
                alt="Test Item 1"
                align="middle"
              />
              <br />
              <br />
              Klicken Sie auf <span>Start</span>, um die erste Aufgabe zu
              beginnen.
              <button className="start-btn" onClick={this.handleNext}>
                Start
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewWordsInstruction;
