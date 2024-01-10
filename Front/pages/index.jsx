import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Head>
      <main>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-4">Bem vindo a nossa Agência de Viagens.</h1>
            <p className="lead">
              O mundo é vasto e cheio de surpresas. Permita-se explorá-lo com
              confiança, segurança e o melhor suporte da nossa equipe.
            </p>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <p className="lead">
              Explorar novos horizontes é a nossa paixão! Encontre a viagem dos seus
              sonhos aqui e embarque em uma jornada única.
            </p>
            <p className="lead">
              Queremos tornar seus sonhos em realidade! Deixe-nos ajudá-lo a
              planejar a viagem perfeita, com amor e dedicação em cada detalhe.
            </p>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <p className="lead">
              Venha conosco em uma jornada extraordinária! Nossos especialistas
              estão prontos para criar um itinerário sob medida para você.
            </p>
            <p className="lead">
              Conheça lugares incríveis e vivencie culturas fascinantes com nossas
              excursões exclusivas. Sua próxima aventura começa aqui!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
