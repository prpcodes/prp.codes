<template>
  <UPage>
    <UPageHero
      title="Impressum"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    />
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-3">
            Medieninhaber und Herausgeber
          </h2>
          <p>
            Philipp Rupert Proksch<br>
            Harmannsdorf 35<br>
            3713 Harmannsdorf<br>
            Österreich
          </p>
          <p class="mt-2">
            <strong>E-Mail:</strong> work@prp.codes
          </p>
          <p><strong>Geschäftstätigkeit:</strong> IT Services</p>
          <p><strong>Firmenbuchnummer:</strong> 657024m</p>
          <p><strong>GISA-Zahl:</strong> 38551949</p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            Aufsichtsbehörde
          </h2>
          <p>Bezirkshauptmannschaft Horn</p>
          <p>Frauenhofner Straße 2, 3580 Horn, Österreich</p>
          <p>
            Website: <a
              href="https://www.noe.gv.at"
              target="_blank"
              class="text-blue-600 hover:underline"
            >www.noe.gv.at</a>
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            EU-Streitschlichtung
          </h2>
          <p>
            Gemäß der Verordnung über die Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung)
            informieren wir Sie über die Plattform zur Online-Streitbeilegung (OS-Plattform). Verbraucher haben die
            Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der Europäischen Kommission zu richten
            unter <a
              href="http://www.ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
              target="_blank"
              class="text-blue-600 hover:underline"
            >www.ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE</a>.
            Die erforderlichen Kontaktdaten finden Sie oben in unserem Impressum. Wir möchten jedoch darauf hinweisen,
            dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            Haftung für Inhalte dieser Website
          </h2>
          <p>
            Wir entwickeln die Inhalte dieser Website kontinuierlich weiter und bemühen uns, korrekte und aktuelle
            Informationen bereitzustellen. Leider können wir keine Haftung für die Richtigkeit aller Inhalte auf dieser
            Website übernehmen, insbesondere nicht für Inhalte, die von Dritten bereitgestellt werden. Als
            Dienstanbieter sind wir nicht verpflichtet, die von Ihnen übermittelten oder gespeicherten Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Unsere
            Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach
            allgemeinen Gesetzen aufgrund von Gerichts- oder Behördenanordnungen bleiben unberührt, auch wenn wir nicht
            verantwortlich sind. Wenn Sie problematische oder rechtswidrige Inhalte bemerken, kontaktieren Sie uns bitte
            umgehend, damit wir die rechtswidrigen Inhalte entfernen können. Die Kontaktdaten finden Sie oben auf dieser
            Seite.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            Haftung für Links auf dieser Website
          </h2>
          <p>
            Unsere Website enthält Links zu anderen Websites, deren Inhalte wir nicht zu verantworten sind. Wir
            übernehmen keine Haftung für verlinkte Websites, da uns rechtswidrige Aktivitäten nicht bekannt waren und
            sind, solche Rechtswidrigkeiten uns nicht aufgefallen sind und wir Links sofort entfernen würden, wenn wir
            von etwaigen Rechtswidrigkeiten erfahren. Wenn Sie rechtswidrige Links auf unserer Website bemerken,
            kontaktieren Sie uns bitte. Die Kontaktdaten finden Sie oben auf dieser Seite.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            Urheberrechtshinweis
          </h2>
          <p>
            Alle Inhalte dieser Website (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Bitte fragen Sie
            uns, bevor Sie Inhalte dieser Website verbreiten, reproduzieren oder verwenden, z.B. um sie auf anderen
            Websites erneut zu veröffentlichen. Gegebenenfalls werden wir die unbefugte Nutzung von Teilen der Inhalte
            unserer Website rechtlich verfolgen. Wenn Sie Inhalte auf dieser Website finden, die gegen das Urheberrecht
            verstoßen, kontaktieren Sie uns bitte. Die Kontaktdaten finden Sie oben auf dieser Seite.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            Bildnachweise
          </h2>
          <p>Die Bilder, Fotos und Grafiken auf dieser Website sind urheberrechtlich geschützt.</p>
          <p>Die Bildrechte liegen bei:</p>
          <ul class="list-disc list-inside">
            <li>Philip Rupert Proksch</li>
            <li>Unsplash.com (siehe einzelne Bildnachweise)</li>
            <li>Undraw.co (siehe einzelne Bildnachweise)</li>
          </ul>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-3">
            Zentrale Anlaufstelle gemäß dem Gesetz über digitale Dienstleistungen (DSA)
          </h2>
          <p>E-Mail: rtr@rtr.at</p>
          <p>Telefonnummer: +43 1 58058-0</p>
          <p>Sprachen: Deutsch</p>
          <p>Adresse:</p>
          <p>Rundfunk und Telekom Regulierungs-GmbH</p>
          <p>Mariahilfer Straße 77-79, 1060 Wien</p>
          <p>Österreich</p>
        </div>

        <div>
          <p>Letzte Aktualisierung: 18. Oktober 2025</p>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
