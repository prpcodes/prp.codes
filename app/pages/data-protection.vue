<template>
  <UPage>
    <UPageHero title="Data Protection" orientation="horizontal" :ui="{
      container: 'lg:flex sm:flex-row items-center',
      title: '!mx-0 text-left',
      description: '!mx-0 text-left'
    }" />
    <UPageSection :ui="{
      container: '!pt-0'
    }">
      <div>
        <h2 class="text-xl font-semibold">
          1. General Information on Data Processing
        </h2>
        <p>The protection of your personal data is important to us. We process your data exclusively on the basis of
          legal provisions (GDPR, TKG).</p>
      </div>
      <div>
        <h2 class="text-xl font-semibold">
          2. Your Rights
        </h2>
        <p>
          You have the right to access, rectification, deletion, restriction, data portability, withdrawal of consent,
          and objection. If you believe that the processing of your data violates data protection law or your data
          protection rights have been violated in any other way, you can file a complaint with the supervisory
          authority.
          In Austria, this is the Austrian Data Protection Authority:
        </p>
        <br>
        <p>Österreichische Datenschutzbehörde</p>
        <p>Barichgasse 40-42</p>
        <p>1030 Wien</p>
        <p>Austria</p>

        <p>Phone: +43 1 52 152-0</p>
        <p>Email: dsb@dsb.gv.at</p>
        <p>Website: www.dsb.gv.at</p>
      </div>
      <div>
        <h2 class="text-xl font-semibold">
          3. Data Sharing
        </h2>
        <p>Your personal data will not be shared with third parties, except:</p>
        <ul class="list-disc list-inside">
          <li>when we are legally obligated to do so</li>
          <li>when necessary for contract fulfillment</li>
          <li>when you have explicitly consented</li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold">
          4. Cookies and Web Analytics
        </h2>
        <p>We do not use cookies.</p>
        <p>We collect and analyze information about how users interact with our website. This information helps us
          improve our website and provide a better user experience. The data collected is anonymized and does not
          identify individual users.</p>
      </div>
      <div>
        <h2 class="text-xl font-semibold">
          5. Hosting
        </h2>
        <p>This website is hosted by a hosting provider. The host automatically stores information in server log files
          that your browser automatically transmits. This includes:</p>
        <ul class="list-disc list-inside">
          <li>Browser type and version</li>
          <li>Operating system used</li>
          <li>Referrer URL</li>
          <li>Hostname of the accessing device</li>
          <li>Time of server request</li>
          <li>IP address</li>
        </ul>
        <p>This data is not combined with other data sources. Collection of this data is based on Art. 6(1)(f) GDPR
          (legitimate interest in the technical provision of the website).</p>
      </div>
      <div>
        <p>Last updated: October 18, 2025</p>
      </div>
    </UPageSection>
  </UPage>
</template>
