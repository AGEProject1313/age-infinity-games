import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy – EVA Awakening",
  description:
    "Privacy Policy for EVA Awakening, a virtual reality application by AGE Infinity Games.",
};

export default function EvaPrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1>Privacy Policy</h1>

          <p className={styles.sub}>
            <strong>EVA Awakening</strong> — virtual reality application
            (Meta Quest)
          </p>

          <p className={styles.sub}>Last updated: 10 July 2026</p>
        </header>

        <p>
          This Privacy Policy describes how{" "}
          <strong>AGE Infinity Games</strong>, a brand of{" "}
          <strong>A.G.E. Project S.r.l.</strong>, hereinafter “we” or the
          “Controller”, handles data in connection with the application{" "}
          <strong>EVA Awakening</strong>, the “App”, a virtual reality gaming
          experience. Please read it before using the App.
        </p>

        <div className={styles.card}>
          <strong>In short:</strong> EVA Awakening is an offline game that{" "}
          <em>does not collect or transmit personally identifiable data</em>.
          We do not require registration, we do not access your camera,
          microphone, location or contacts, and we do not sell data to third
          parties.
        </div>

        <section>
          <h2>1. Data Controller</h2>

          <p>
            The Data Controller is <strong>A.G.E. Project S.r.l.</strong>{" "}
            (brand <strong>AGE Infinity Games</strong>).
            <br />
            Website:{" "}
            <a
              href="https://www.ageinfinitygames.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ageinfinitygames.com
            </a>
            <br />
            For any privacy-related request you can contact us at:{" "}
            <a href="mailto:info@ageinfinitygames.com">
              info@ageinfinitygames.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>2. Data we do NOT collect</h2>

          <p>
            The App is designed to work without collecting personal data. In
            particular, the App does not collect:
          </p>

          <ul>
            <li>Name, email address or contact details</li>
            <li>Geolocation data</li>
            <li>
              Images from the camera or audio recordings from the microphone
            </li>
            <li>Contacts, address book or data from other apps</li>
            <li>Biometric or eye-tracking data for profiling purposes</li>
          </ul>
        </section>

        <section>
          <h2>3. Technical data and App permissions</h2>

          <p>
            To function, the App requests a minimal set of system permissions
            on the headset:
          </p>

          <ul>
            <li>
              <strong>Internet / network state access</strong>{" "}
              (<code>INTERNET</code>, <code>ACCESS_NETWORK_STATE</code>,{" "}
              <code>ACCESS_WIFI_STATE</code>): used to load certain App
              resources and to check connectivity.
            </li>

            <li>
              <strong>Wake Lock</strong> (<code>WAKE_LOCK</code>): prevents the
              headset from going to sleep during gameplay.
            </li>
          </ul>

          <p>
            These permissions are not used to identify you or to collect
            personal data.
          </p>
        </section>

        <section>
          <h2>4. Game data</h2>

          <p>
            Any game progress, settings or preferences are stored{" "}
            <strong>locally on your device</strong> and are not transmitted to
            our servers. Uninstalling the App removes this data.
          </p>
        </section>

        <section>
          <h2>5. Third-party services</h2>

          <p>
            The App may use hosting services to load content, for example{" "}
            <strong>Google Firebase</strong> for the delivery of graphic
            assets. Such services may process limited technical data, such as
            your IP address, necessary to transmit the content, in accordance
            with their respective policies:
          </p>

          <ul>
            <li>
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Firebase Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="https://www.meta.com/legal/quest/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meta Quest platform Privacy Policy
              </a>
            </li>
          </ul>

          <p className={styles.muted}>
            Downloading and using the App through the Meta store is also
            subject to Meta Platforms&apos; policies.
          </p>
        </section>

        <section>
          <h2>6. Children</h2>

          <p>
            The App is not intended for children under 13 and does not
            knowingly collect personal data from children. The use of VR
            headsets is generally subject to the age limits indicated by the
            device manufacturer.
          </p>
        </section>

        <section>
          <h2>7. Security</h2>

          <p>
            Since we do not collect personal data on servers, processing risk
            is kept to a minimum. We nonetheless take reasonable measures to
            protect the integrity of the App and of the distributed content.
          </p>
        </section>

        <section>
          <h2>8. Your rights</h2>

          <p>
            Under Regulation (EU) 2016/679 (GDPR), you have the right to
            access, rectify, erase and restrict the processing of your data.
            Since we do not retain personally identifiable data, in most cases
            we hold no information to provide or delete; you may nonetheless
            contact us at the address above for any request.
          </p>
        </section>

        <section>
          <h2>9. Changes to this Policy</h2>

          <p>
            We may update this Policy in the future. Changes will be published
            at this same address, with the “Last updated” date shown at the top
            of the page.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>

          <p>
            For questions about this Privacy Policy, please write to{" "}
            <a href="mailto:info@ageinfinitygames.com">
              info@ageinfinitygames.com
            </a>
            .
          </p>
        </section>

        <footer className={styles.footer}>
          © 2026 A.G.E. Project S.r.l. — AGE Infinity Games — EVA Awakening.
          All rights reserved.
        </footer>
      </div>
    </main>
  );
}