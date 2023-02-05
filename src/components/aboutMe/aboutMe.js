export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe_description">
        <h1>Wiktoria Marcinkowska</h1>
        <h3>Head of design</h3>
        <p>
          Nazywam się Wiktoria Marcinkowska, jestem założycielką Bespoke Studio
          i głównym projektantem w naszym zespole. Na co dzień tworzę i
          nadzoruję realizowane przez nas projekty, dbam o relacje z Klientami
          oraz ich satysfakcję. Bespoke Studio zrodziło się z moich marzeń o
          tworzeniu pięknych i niepowtarzalnych przestrzeni, przepełnionych
          wysokiej jakości polskim i zagranicznym wzornictwem, w których
          uważność na najmniejsze detale i zadowolenie każdego Klienta, zawsze
          stoją na pierwszym miejscu. Każdego dnia staram się doskonalić naszą
          pracę tak, by tworzone w Bespoke Studio projekty posiadały wyjątkową
          duszę, a wszystkie ich elementy były spójne i intencjonalne.
        </p>
      </div>
      <div className="aboutMe_image">
        <img
          src={require("../images/aboutMe/portrait.jpg")}
          alt="My Portrait"
        ></img>
      </div>
    </div>
  );
}
