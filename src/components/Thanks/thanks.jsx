import './thanks.scss'

const Thanks = () => {
  return (
    <section className="thanks">
      <div className="thanks_wrapper margin">
        <h3 className="thanks_wrapper_title">MERCI POUR VOTRE ATTENTION</h3>
        <p className="thanks_wrapper_text">
          Téléchargez mon{' '}
          {
            <a href="/omf.jpg" download="omf.jpg">
              CV
            </a>
          }{' '}
          si vous souhaitez plus d'informations
        </p>
      </div>
    </section>
  )
}

export default Thanks
