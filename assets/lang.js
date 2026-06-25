/* Sistema de idiomas ES / CA para IRISRESTAURA.
   Por defecto la web está en castellano (el HTML ya contiene el texto ES).
   Este script solo guarda las traducciones al catalán y, al cambiar de idioma,
   sustituye el contenido de cada elemento con [data-i18n].
   La elección se recuerda en localStorage y se aplica en todas las páginas. */
(function () {
  const CA = {
    /* --- Compartido (nav, footer, modal, botones) --- */
    nav_trabajos: `Treballs`,
    nav_sobremi: `Sobre mi`,
    nav_contacto: `Contacte`,
    mod_eyebrow: `Contacte`,
    mod_title: `Parlem.`,
    mod_correo: `Correu`,
    mod_tel: `Telèfon`,
    footer_cr: `Conservació i restauració`,
    back_link: `← Tornar a treballs`,
    foot_ver: `Veure tots els treballs`,
    foot_contacto: `Contacte`,

    /* --- Inicio --- */
    idx_hero_ver: `Veure treballs`,
    idx_hero_contacto: `Contacte`,
    idx_sobre_eyebrow: `Sobre mi`,
    idx_sobre_p1: `Em dic Iris Rodríguez i sóc estudiant del Grau en Conservació i Restauració de Béns Culturals, amb especialització en pintura, a l'Escola Superior de Conservació i Restauració de Béns Culturals de Catalunya (ESCRBCC).`,
    idx_sobre_p2: `Al llarg de la meva formació he participat en diferents projectes de conservació-restauració de pintura sobre taula, pintura sobre tela, pintura mural i retaules policromats, tant en l'àmbit acadèmic com en pràctiques professionals. Aquestes experiències m'han permès adquirir coneixements tècnics en documentació, diagnòstic, consolidació, neteja i reintegració, així com desenvolupar una visió global dels processos d'intervenció sobre el patrimoni cultural.`,
    idx_sobre_p3: `Sóc una persona responsable, curiosa i amb ganes d'aprendre. M'agrada treballar en equip i participar en projectes que contribueixin a la preservació i difusió del patrimoni cultural. Actualment busco continuar adquirint experiència professional i afrontar nous reptes en l'àmbit de la conservació-restauració.`,
    idx_sobre_btn: `Contacte`,
    idx_trab_h2: `Treballs`,
    idx_trab_p: `Una selecció de pràctiques, intervencions i projectes personals. Cadascun explica el seu propi recorregut: estat inicial, decisions, procés i resultat.`,
    idx_card1_h3: `Pràctiques a la parròquia de Sant Agustí`,
    idx_card2_h3: `Pràctiques a l'església de Palau de Noguera`,
    idx_card3_meta: `Museu de l'Empordà · 2025`,
    idx_card3_h3: `Restauració de pintura sobre tela`,
    idx_arrow: `Veure treball →`,
    idx_contact_eyebrow: `Contacte`,
    idx_contact_h2: `Creus que puc encaixar en el teu projecte?`,
    idx_contact_p: `Si tens un encàrrec, una consulta o vols parlar sobre un projecte de conservació i restauració, escriu-me.`,
    idx_contact_btn: `Contactar`,

    /* Etiquetas del carrusel */
    cl_parroquia: `Parròquia de Sant Agustí <span>Raval, Barcelona · 2025</span>`,
    cl_palau: `Palau de Noguera <span>Tremp · 2025</span>`,
    cl_pintura: `Pintura sobre tela <span>Museu de l'Empordà · 2025</span>`,
    cl_interv: `Intervenció <span>Marc històric</span>`,
    cl_reint: `Reintegració <span>Procés</span>`,
    cl_taller: `Taller <span>Estudi</span>`,
    cl_doc: `Documentació <span>Abans / Després</span>`,

    /* --- Parroquia de Sant Agustí --- */
    par_eyebrow: `Treball · Pràctiques dirigides`,
    par_meta3: `Dirigit per Àlex Lorenz · ESCRBCC`,
    par_b1_h2: `Documentar <span class="accent">abans</span> d'intervenir.`,
    par_b1_p1: `Restauració de les pintures murals de la capella de la Verge Maria del claustre de la Parròquia de Sant Agustí (El Raval, Barcelona). Projecte organitzat per l'ESCRBCC i dirigit pel professor Àlex Lorenz, desenvolupat al llarg de tres mesos.`,
    par_b1_p2: `La intervenció es va iniciar amb la realització de documentació gràfica i l'examen organolèptic de les pintures murals per determinar l'estat de conservació i definir els criteris d'intervenció.`,
    par_b1_note: `Fase 01 · Documentació i examen`,
    par_b3_h2: `Consolidar, netejar, <span class="accent">reintegrar</span>.`,
    par_b3_p1: `Els treballs es van centrar principalment en la consolidació de la policromia, que presentava aixecaments amb risc de despreniment. Un cop estabilitzada la capa pictòrica, es va procedir a la neteja superficial de la brutícia acumulada.`,
    par_b3_p2: `Posteriorment es va realitzar la reintegració matèrica i cromàtica de les zones afectades, retornant la lectura visual del conjunt.`,
    par_b3_note: `Fase 02 · Consolidació i reintegració`,
    par_b4_p: `Aquesta experiència va representar el meu primer contacte amb una intervenció de gran format sobre bastida. Em va permetre desenvolupar competències de treball en equip, planificació de tasques i organització de l'espai de treball, aspectes fonamentals per garantir la seguretat i l'eficiència en una intervenció de conservació-restauració.`,

    /* --- Palau de Noguera --- */
    pal_eyebrow: `Treball · Pràctiques dirigides`,
    pal_meta3: `Pau Claramonte i Lídia Balust · ESCRBCC`,
    pal_b1_h2: `Retaule barroc del <span class="accent">segle XVIII</span>.`,
    pal_b1_p1: `Restauració del retaule de la Mare de Déu del Roser de l'església parroquial de Sant Joan Baptista de Palau de Noguera (Pallars Jussà). Un retaule barroc de 505 cm d'alçada, 331 cm d'amplada i 135 cm de profunditat, realitzat amb daurats, colradures i pintura al tremp sobre fusta. Les escultures actuals, de guix policromat, són del segle XX i substitueixen les originals, destruïdes durant la Guerra Civil Espanyola.`,
    pal_b1_p2: `Pràctiques organitzades per l'ESCRBCC i coordinades pels professors Pau Claramonte i Lídia Balust, desenvolupades al llarg de dues setmanes.`,
    pal_b1_note: `Fase 01 · Documentació i examen organolèptic`,
    pal_b3_h2: `Consolidació, neteja i <span class="accent">reintegració</span>.`,
    pal_b3_p1: `Els treballs es van centrar en la consolidació de la policromia i dels daurats originals, que presentaven aixecaments i risc de despreniment. Un cop estabilitzada la capa pictòrica, es va procedir a la documentació gràfica i l'examen organolèptic per determinar l'estat de conservació.`,
    pal_b3_p2: `Posteriorment, es va dur a terme una neteja mecànica i fisicoquímica de les diferents superfícies: daurats, policromies, fusta vista i elements escultòrics.`,
    pal_b3_note: `Fase 02 · Consolidació i neteja`,
    pal_b4_h2: `Detalls del <span class="accent">procés</span>.`,
    pal_b4_p: `Fragments del treball diari: el gest sobre la superfície, el detall ornamental i el ritme de la intervenció.`,
    pal_b5_h2: `Reintegració <span class="accent">cromàtica</span>.`,
    pal_b5_p: `A causa de la durada limitada del projecte, no va ser possible realitzar l'estucat de les pèrdues. Es va efectuar una reintegració cromàtica dels perímetres de les llacunes per minimitzar-ne l'impacte visual i millorar la lectura del conjunt.`,
    pal_b5_note: `Fase 03 · Reintegració cromàtica`,
    pal_b7_h2: `Treball en <span class="accent">equip</span>.`,
    pal_b7_p: `Treballar en un retaule d'aquestes dimensions em va permetre aprofundir en els processos de consolidació i neteja aplicats a estructures policromades i daurades, així com reforçar les competències de treball en equip i coordinació en una intervenció de gran format.`,
    pal_b7_note: `Competències · gran format`,
    pal_b8_p: `Tots els membres de l'equip vam participar en les diferents fases de la intervenció, des de la consolidació fins a la neteja i la reintegració cromàtica.`,
    pal_b9_h2: `Abans i <span class="accent">després</span>.`,
    pal_b9_p: `El resultat del treball es mesura en el canvi sobre la peça. Arrossega el control per comparar l'estat del retaule abans i després de la intervenció.`,
    pal_ba_antes: `Abans`,
    pal_ba_despues: `Després`,

    /* --- Pintura sobre tela --- */
    pin_eyebrow: `Treball · Taller de conservació`,
    pin_meta1: `Museu de l'Empordà`,
    pin_meta3: `ESCRBCC · 4t grau`,
    pin_p_intro1: `Dins del marc acadèmic del taller de conservació-restauració de 4t grau, vaig restaurar una pintura sobre tela procedent del Museu de l'Empordà, cedida a l'ESCRBCC per a la seva intervenció. L'obra estava muntada sobre un bastidor fix de fusta i presentava un suport de tela de lli industrial amb trama de tafetà.`,
    pin_p_intro2: `L'estat de conservació era molt afectat: deformacions, brutícia acumulada, estrips i pèrdues al perímetre.`,
    pin_p_intro3: `La capa de preparació, de naturalesa probablement tradicional —sulfat càlcic i cola animal—, era fina i irregular. La capa pictòrica mostrava una bona adhesió general al suport, tot i l'estat de degradació de la peça. La superfície presentava un vernís oxidat, identificat com a possible vernís dammar, que alterava els colors originals.`,
    pin_note_estado: `Estat inicial · diagnòstic`,
    pin_p_fij1: `La intervenció va començar amb la documentació gràfica i analítica, seguida de l'examen organolèptic. Després es va retirar el marc i es va procedir a la fixació de la policromia.`,
    pin_p_fij2: `Es va protegir el perímetre de l'obra amb paper japonès i cola de conill. Aquesta protecció va preparar la peça per poder desclavar-la del bastidor sense comprometre la capa pictòrica.`,
    pin_note_fij: `Fases 01–02 · Fixació i protecció del perímetre`,
    pin_p_descl: `Un cop desclavada la tela del bastidor fix original, es va retirar completament i es va realitzar la neteja mecànica del bastidor i del revers del suport, deixant la tela a punt per als tractaments posteriors.`,
    pin_p_def1: `Les deformacions es van corregir mitjançant processos d'humectació controlada, pressió i aplicació de calor localitzada, aconseguint l'aplanat progressiu de la tela.`,
    pin_p_def2: `Els estrips es van estabilitzar mitjançant soldadura de fibres amb microsoldador, fent servir cola d'esturió i midó de blat.`,
    pin_note_def: `Fase 03 · Deformacions i estrips`,
    pin_p_cons1: `La tela es va consolidar amb un adhesiu sintètic sobre una tela de polièster, utilitzant una taula calenta amb sistema de succió i control de temperatura.`,
    pin_p_cons2: `Un cop estabilitzat el suport, es va tensar la tela sobre un nou bastidor amb grapes i tensió progressiva, garantint una distribució uniforme.`,
    pin_p_cons3: `El revers va quedar net i aplanat, amb la tela original consolidada sobre el nou suport de polièster i a punt per als tractaments de la capa pictòrica.`,
    pin_note_cons: `Fase 04 · Consolidació i tensat`,
    pin_p_limp1: `La neteja superficial de la capa pictòrica es va realitzar mitjançant sistemes aquosos tamponats, seleccionats a partir de tests previs de pH. Es van fer proves amb el test de Cremonesi per eliminar el vernís envellit i, finalment, es va netejar amb la proporció LE3 (70 % ligroïna, 30 % etanol).`,
    pin_p_limp2: `Després de la neteja es va aplicar un primer vernissat de protecció amb vernís de retoc i es van estucar les llacunes amb carbonat càlcic i cola de conill. La reintegració cromàtica es va iniciar amb aquarel·les per establir una base i es va completar amb pigments i vernís de retoc, aplicant un criteri il·lusionista per recuperar la lectura de l'obra.`,
    pin_note_limp: `Fase 05 · Neteja i reintegració`,

    /* --- Voluntariado DANA --- */
    dana_eyebrow: `Voluntariat · Emergència patrimonial`,
    dana_meta3: `#SalvemLesFotos · UPV`,
    dana_b1_h2: `Salvar la <span class="accent">memòria</span> fotogràfica.`,
    dana_b1_p1: `L'any 2025 vaig participar com a voluntària a la campanya #SalvemLesFotos, impulsada per la Universitat Politècnica de València amb l'objectiu de recuperar fotografies afectades per la DANA d'octubre de 2024.`,
    dana_b1_p2: `El voluntariat es va desenvolupar al Museu Comarcal de l'Horta Sud (Torrent, València) durant una setmana. Les tasques es van organitzar en una cadena de treball destinada a estabilitzar i recuperar les fotografies danyades.`,
    dana_b1_note: `Campanya #SalvemLesFotos · 2025`,
    dana_b3_h2: `Retirar, netejar, <span class="accent">assecar</span>.`,
    dana_b3_p1: `El procés incloïa la retirada de les fotografies dels àlbums, la neteja del revers i de l'anvers, i la posterior disposició sobre papers secants per facilitar l'assecat controlat.`,
    dana_b3_note: `Cadena de treball · Estabilització`,
    dana_b4_p: `Aquesta experiència em va permetre participar en una actuació d'emergència sobre patrimoni fotogràfic i comprendre la importància de la coordinació entre equips per preservar la memòria documental i personal de les famílies afectades.`,

    /* --- Index DANA card --- */
    idx_card4_meta: `Torrent, València · 2025`,
    idx_card4_h3: `Voluntariat DANA`,
    cl_dana: `Voluntariat DANA <span>Torrent, València · 2025</span>`,

    /* --- Palau de Noguera 2026 --- */
    pal26_eyebrow: `Treball · Conservació-restauració`,
    pal26_meta3: `Retaules barrocs · ESCRBCC`,
    pal26_badge: `Pròximament`,
    pal26_b1_h2: `Nova campanya a Sant Joan <span class="accent">Baptista</span>.`,
    pal26_b1_p1: `Des del 29 de juny fins al 10 de juliol participaré en una nova campanya de conservació-restauració dins el conjunt de retaules barrocs de l'església de Sant Joan Baptista de Palau de Noguera.`,
    pal26_b1_p2: `Pròximament ampliaré aquesta secció amb els resultats i les tasques desenvolupades durant la intervenció.`,
    pal26_b1_note: `Juny – Juliol 2026 · En curs`,
    pal26_ver_2025: `Veure intervenció 2025 →`,
    idx_card5_meta: `Tremp, Lleida · 2026`,
    idx_card5_h3: `Palau de Noguera (2026)`,
    cl_palau26: `Palau de Noguera <span>Tremp · 2026</span>`,

    /* --- Pràctiques MNAC --- */
    mnac_eyebrow: `Pràctiques curriculars · Pintura sobre tela`,
    mnac_meta3: `Tutoritzat per Teresa Schreibweis`,
    mnac_b1_h2: `Un mes i mig al <span class="accent">MNAC</span>.`,
    mnac_b1_p1: `Al final del quart curs del Grau en Conservació i Restauració de Béns Culturals, vaig realitzar les pràctiques curriculars al Museu Nacional d'Art de Catalunya (MNAC), dins l'especialitat de pintura sobre tela. Les pràctiques, organitzades per l'ESCRBCC, van estar tutoritzades per Teresa Schreibweis i van tenir una durada d'un mes i mig.`,
    mnac_eyebrow: `Pràctiques curriculars · Pintura sobre tela`,
    mnac_meta3: `Tutoritzat per Teresa Schreibweis`,
    mnac_b1_note: `Pràctiques curriculars · ESCRBCC · 2026`,
    mnac_b2_h2: `Conservació <span class="accent">preventiva</span>.`,
    mnac_b2_p1: `Durant aquest període vaig participar en diverses tasques vinculades a la conservació i restauració de les col·leccions del museu. Entre aquestes, destaca la revisió de les sales de la col·lecció d'Art Modern I, realitzant controls de conservació preventiva, detecció d'incidències, seguiment de l'estat de les obres i tasques de manteniment bàsic.`,
    mnac_b2_note: `Col·lecció Art Modern I · Conservació preventiva`,
    mnac_b3_h2: `Marc de <span class="accent">Milicià ferit</span>.`,
    mnac_b3_p1: `També vaig intervenir el marc de l'obra Milicià ferit de Francisco Mateos. La intervenció va incloure la documentació gràfica, l'elaboració de mapes d'alteracions, l'estucat de les pèrdues i la posterior reintegració cromàtica.`,
    mnac_b3_note: `Francisco Mateos · Intervenció de marc`,
    mnac_b4_h2: `<span class="accent">Safareig</span> de Josep Frau.`,
    mnac_b4_p1: `A més, vaig participar en la conservació-restauració de l'obra Safareig de Josep Frau, una pintura a l'oli sobre tela que presentava aixecaments de capa pictòrica amb risc de despreniment. La intervenció es va centrar en la fixació dels aixecaments per recuperar-ne l'estabilitat estructural, seguida d'una neteja superficial mitjançant l'aplicació de solucions tampó.`,
    mnac_b4_note: `Josep Frau · Fixació i neteja superficial`,
    mnac_b5_h2: `Préstecs i <span class="accent">exposicions</span>.`,
    mnac_b5_p1: `Paral·lelament, vaig col·laborar en tasques d'embalatge i desembalatge d'obres destinades a préstecs i exposicions temporals, adquirint experiència en la manipulació segura de béns culturals i en els protocols de moviment d'obres dins l'àmbit museístic.`,
    mnac_b5_p2: `Aquesta estada em va permetre conèixer de primera mà el funcionament d'un museu nacional i el treball diari dels professionals de la conservació-restauració, ampliant la meva experiència tant en intervenció directa sobre obra com en conservació preventiva i gestió de col·leccions.`,
    mnac_b5_note: `Embalatge · Préstecs · Exposicions temporals`,
    idx_card6_meta: `Barcelona · 2026`,
    idx_card6_h3: `Pràctiques MNAC`,
    cl_mnac: `Pràctiques MNAC <span>Barcelona · 2026</span>`
  };

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (el.dataset.es === undefined) el.dataset.es = el.innerHTML;
      if (lang === 'ca' && CA[k] != null) el.innerHTML = CA[k];
      else el.innerHTML = el.dataset.es;
    });
    document.querySelectorAll('.lang-btn').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function init() {
    let lang = 'es';
    try { lang = localStorage.getItem('lang') || 'es'; } catch (e) {}
    document.querySelectorAll('.lang-btn').forEach((b) => {
      b.addEventListener('click', () => apply(b.dataset.lang));
    });
    apply(lang);
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
