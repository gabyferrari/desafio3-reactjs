import "./styles.css";

type Props = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

export default function CardResult({ avatar_url, html_url, followers, location, name,}: Props) {

  return (
    <>
      <section>
        <div className="card-result container-search mt50">
          <div className="dflex">

            <div>
              <img
                className="avatar-style"
                src={avatar_url}
                alt="Foto de Perfil"
              />
            </div>

            <div className="card-info">
              <h3 className="info-title">Informações</h3>
              <div className="info">
                <p>
                  <span className="info-span">Perfil: </span>
                  <a href={html_url}>{html_url}</a>
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="info-span">Seguidores: </span>
                  <span className="result-span">{followers}</span>
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="info-span">Localidade: </span>
                  <span className="result-span">{location}</span>
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="info-span">Nome: </span>
                  <span className="result-span">{name}</span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
