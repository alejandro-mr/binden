import Link from 'next/link'

const HowItWorks = () => (
  <div className="grid-container fluid">
    <div className="grid-x grid-padding-x small-up-1 large-up-3">
      <div className="cell text-center step">
        <h2>Paso 1:</h2>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAThSURBVHhe7ZzdbhtFGIZzVG4ijUSbnvSHSrQ2nCEcIXED3AuIg54gUbVAUxoqhKCIA4QoVM6PmkKI04bGapGQg6hDoji3kAPsHLYM820/S4P9TuxK76zX5HukR6rq2X1n3o13x0mUCcMwDMMwDMMwjJRU19ePz9fqP1Zr9XbmWv3O0oNHp/Tl3CnafJKSLXZtY39+re7+68b+nfuPJ3VYbhRtPsmp1jZ+6F/sc6trG7d1WG4UbT7J8W/1Dlqs6Bf8tw7LjaLNJzlooaE6LDfQHEJ12P8HtMhQHZYbaA6hOqy4dGZeP3cwU5r1bnUq5YODmbI7TLTIUHRMStEcQtExobrmpnTQeeviWa0lPf+8Pf3SQaX8mZ/As95JHSZaZCg6JqVoDqHomJjPuyjNuXdOH9Oa0iABPqiGJjFItMhQdExK0RxC0TEDrZRXk16Ezkzpcxg8wP03LsBFhsoYdGwKk87H3x20Li5yn3vR247YrpTdrydfhosMlTEyFp2Daer5dCqlp503S2e0Nh7+yl5HgYPcffWMuzc5CRcZKmNkLDoH01zmUyl9orXx8Cf2T3wQNsD69ImhF1w/dQKeg2ku86mUn2htPPzDtw3DBrgydXzoBa9MTcFzMM1nPqW21sYDBw22u+CF5RpcaObyau4XIPV8tDYeKGQYu2/5xavX8GK9i1euZWPyvAWlno/WxgOFDGP3obdcfs3NL630L9j/3/LFUjamdSG/h3Dq+WhtPFDIMHa3fdmiz593i5c/zt7iC3d/cUsffuTunXsle+3hdL7b0NTz0dp4oJBhlQ81siBZGFJey/uDWOr5aG08UMiLKF9N8vaX+6o83ET5t7zN8/jK7zX1fLQ2HijEjKu18UAhZlytjQcKMeNqbTxQiBlXa+OBQsy4WhsPFGLG1dp4bO7sOXN4tTYeKMSMq7XxQCFmXK2NBwox42ptPFCIGVdr44FCzLhaGw8UYsbV2nigEDOu1sYDhZhxtTYeKMSMq7XxQCFmXK2NBwox42ptPFAI01vVn1xjuwVfG0e1Nh4ohOm7s1+6ue8W3O9bu/D1cVNr44FCmMoFEK9+fds9/nMbjhkntTYeKIRp9wKIH3zxrXvYeALHjYtaGw8UwjS8AOKlm9+41d8acOw4qLXxQCFMey+A+P6NW25p/REcX3S1Nh4ohCm6AOJ7179y3//8AB5TZLU2HiiEKSo/dNy2qVobDxTCFJXe6zhtU7U2HiiEKSocOS7bVK2NBypjVI7DNlVr44GKGKVF36ZqbTxQCaO2yNtUrY0HKqAIFnWbqrXxQIsvgnYBRqjdgkaoPYRH6JHchqIQpqho5JH9IIZCmKKye7VvRSQUFR5q34wDIUxR6aJ9O1pBIUxR+fYDmQAUwrS3fPuRZA8ohGlYvv1QHoBCmHbLt19LiYBCmEr59otZh4BCmNqvJg4AhZhxtTYeKMSMq7XxQCFmXK2NBwox42ptPBo7e20UZPYrXWltPPxJmyjM7Lex0+L/6eLNndYsCjP7bWzv8f949x9/7Z31+/RnKNAM3G493dxq8f98veBPfhOGmqGfal18ms3mMX8RVkGomdlakY60rjRIgL/HzdntKNDfdvwm5Uby8kMau7un5WEjT/yjuEWVNWdrlw58F1qLYRiGYRiGYRiGYRiHMDHxL8WLJN+nQ3G6AAAAAElFTkSuQmCC" />
        <p>Tienes un Evento que programar</p>
      </div>
      <div className="cell text-center step">
        <h2>Paso 2:</h2>
        <img src="data:image/png;base64,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" />
        <p>Busca proveedores para tu Evento</p>
      </div>
      <div className="cell text-center step">
        <h2>Paso 3:</h2>
        <img src="data:image/png;base64,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" />
        <p>Contacta a tus proveedores favoritos</p>
    </div>
    <p>
    Para que tu evento sea exitoso, debes planificar cada detalle.

  Lo primero que debes hacer, es elegir la fecha de tu evento y calcular el número de invitados que asistirán para calcular el presupuesto que emplearas.

  Aparta el salón, la música y el fotógrafo.

  Elige los alimentos que les darás a tus invitados y la decoración que quieres para ellos.

  Que las prisas no te tomen por sorpresa, recuerda entregar las invitaciones 15 días antes para que tus invitados se programen.

  Ese día debes verte bellísima, así que no olvides seleccionar tu vestido, accesorios, peinado y maquillaje.

  Y lo más importante de todo… disfruta cada detalle, aun cuando este no haya sido planificado, vive y ama cada momento. Al final, será lo más bello.
    </p>
    </div>

    <style jsx>{`
      .grid-container {
        border: 1px solid rgb(248, 248, 248);
        border-width: 1px 0;
        color: rgb(30, 21, 28);
      }
      .grid-x {
        background: rgb(255, 252, 250);
        box-shadow: 0 0 .3125rem rgb(160, 160, 160) inset;
        padding: 1.25rem .625rem;
      }i
      .step > * {
        font-family: 'Montserrat', sans-serif;
      }

      .step {
        margin-bottom: 3rem;
      }

      .step:last-child {
        margin-bottom: 0;
      }

      .step img {
        filter: drop-shadow(0 0 1px #111);
        height: 5rem;
        max-height: 6rem;
      }
      .step h2 {
        font-size: 1.25rem;
        font-weight: 600;
      }
      `}</style>
  </div>
)

export default HowItWorks
