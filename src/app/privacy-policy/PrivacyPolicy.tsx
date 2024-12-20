"use client";

import React from "react";
import styles from "../Hero.module.css";

export default function PrivacyPolicy() {
  return (
    <div
      className={`${styles.container} flex flex-col items-center backdrop-blur-3xl w-full pb-8 text-[#203c4f]`}
    >
      <div
        className={`flex flex-col max-w-[1280px] mx-auto gap-[40px] mb-[40px]`}
      >
        <h1 className={`${styles.headline} mt-[80px]`}>Privacy Policy</h1>
        <p className={`${styles.bodyText}`}>
          Your privacy is important to us. It is our policy to respect your
          privacy regarding any information we may collect from you across our
          website.
        </p>
        <p className={`${styles.bodyText}`}>
          <strong>Information We Collect:</strong>
          <br />
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </p>
        <p className={`${styles.bodyText}`}>
          <strong>How We Use Information:</strong>
          <br />
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </p>
        <p className={`${styles.bodyText}`}>
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </p>
        <p className={`${styles.bodyText}`}>
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </p>
      </div>
    </div>
  );
}
