import React from 'react'


const Terms = () => {
    const url: string = "https://qwizz-frontend.ivelin.info"

    return (
        <div className="max-w-screen-lg mx-auto w-3/4">
            <h1 className="text-4xl font-bold mt-12 mb-6">Terms and Conditions for  <strong>Qwizz</strong> </h1>
            <h3 className="text-2xl font-bold">Welcome to <strong>Qwizz</strong>!</h3>
            <p className="py-6"> 
                These terms and conditions outline the rules and regulations for the use of <strong>Qwizz</strong>., Website, located at <strong> <a href={url}> {url}</a> </strong> <br /><br />

                By accessing this website we assume you accept these terms and conditions. Do not continue to use <strong>Qwizz</strong> if you do not agree to take all of the terms and conditions stated on this page. <br /><br />

                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>
            <h3 className="text-2xl font-bold">Cookies</h3>

            <p className="py-6">
                We employ the use of cookies. By accessing <strong>Qwizz</strong>, you agreed to use cookies in agreement with the <strong>Qwizz</strong>'s Privacy Policy. <br /><br />

                Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>    
            <h3 className="text-2xl font-bold">License</h3>
            <p className="py-6">

                Unless otherwise stated, <strong>Qwizz</strong> and/or its licensors own the intellectual property rights for all material on <strong>Qwizz</strong>. All intellectual property rights are reserved. You may access this from <strong>Qwizz</strong> for your own personal use subjected to restrictions set in these terms and conditions. <br /><br />

                You must not:
                <ul className="list-disc list-inside ml-6">
                    <li className="mb-2">Republish material from <strong>Qwizz</strong></li>
                    <li className="mb-2">Sell, rent or sub-license material from <strong>Qwizz</strong></li>
                    <li className="mb-2">Reproduce, duplicate or copy material from <strong>Qwizz</strong></li>
                    <li className="mb-2">Redistribute content from <strong>Qwizz</strong></li>
                </ul>

                <br />

                This Agreement shall begin on the date hereof.<br /><br />

                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website.  <strong>Qwizz</strong>'s does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of  <strong>Qwizz</strong>'s its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, <strong>Qwizz</strong>'s shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.<br /><br />

                 <strong>Qwizz</strong>'s reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions. <br /><br />

                 You warrant and represent that:
                 <ul className="list-disc list-inside ml-6">
                    <li className="mb-2">You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                    <li className="mb-2">The Comments do not invade any intellectual property right, including without limitation copyright,</li>
                    <li className="mb-2">The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                    <li className="mb-2">The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                </ul>
                <br />
                You hereby grant Company Name a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
            </p>
            <h3 className="text-2xl font-bold">Use of Data</h3>
            <p className="py-6">
                <strong>Qwizz</strong> values your privacy and is committed to handling your data with the utmost care. This "Use of Data" section outlines our data handling practices, including instances where data may be uploaded to third-party services. By using our website, you agree to the terms outlined below.
                <ul className="list-disc list-inside ml-6">
                    <li className="mb-2"> <strong>Data Handling:</strong> <strong>Qwizz</strong> takes data privacy seriously and implements measures to protect your information. However, due to the technical implementation of our website, we may occasionally upload data, including text samples, to third-party services, specifically <a href="https://www.pinecone.io/" className="text-primary hover:text-blue-700 underline">Pinecone</a>, <a href="https://openai.com/" className="text-primary hover:text-blue-700 underline">OpenAI</a>, <a href="https://docs.haystack.deepset.ai/docs/telemetry" className="text-primary hover:text-blue-700 underline">Haystack</a>, <a href="https://aws.amazon.com/de/" className="text-primary hover:text-blue-700 underline">Amazon Web Services</a>, <a href="https://www.digitalocean.com/" className="text-primary hover:text-blue-700 underline">Digital Ocean</a> and <a href="https://quickchart.io" className="text-primary hover:text-blue-700 underline">QuickChart</a>.</li> https://www.digitalocean.com/
                    <li className="mb-2"> <strong>Third-Party Data Handling:</strong> Pinecone, OpenAI, Haystack, Amazon Web Services, Digital Ocean and QuickChart are reputable service providers that have their own terms and conditions regarding data handling and security. When we upload data to these services, it is done in accordance with their respective policies. We encourage you to review their terms and conditions for a better understanding of how they handle data.</li>
                    <li className="mb-2"> <strong>Data Anonymization:</strong> To minimize privacy risks, <strong>Qwizz</strong> does not upload complete text passages to third-party services. Instead, we upload random subsamples of data for specific purposes. This approach is designed to minimize risks associated with data exposure.</li>
                    <li className='mb-2'> <strong>Low Risk Data Handling:</strong> We believe that our data handling practices, including the use of subsampling and adherence to third-party service terms and conditions, carry a low risk to your privacy. However, we cannot guarantee absolute security, and we recommend that you exercise caution when providing any sensitive information on our website.</li>
                    <li className="mb-2"> <strong>Your Consent:</strong> By using <strong>Qwizz</strong>, you consent to the data handling practices outlined in this section. If you do not agree with these practices or have concerns about your data, we encourage you to refrain from using our services.</li>
                    <li className="mb-2"> <strong>Updates to this Section:</strong> <strong>Qwizz</strong> may update this "Use of Data" section from time to time to reflect changes in our data handling practices or third-party service usage. We will notify users of any significant changes, and it is your responsibility to review these updates periodically.</li>
                </ul>
                <br />
            </p>            
            <h3 className="text-2xl font-bold">Hyperlinking to our Content</h3>
            <p className="py-6">
                The following organizations may link to our Website without prior written approval:
                <ul className="list-disc list-inside ml-6">
                    <li className="mb-2">Government agencies;</li>
                    <li className="mb-2">Search engines;</li>
                    <li className="mb-2">News organizations;</li>
                    <li className="mb-2">Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                    <li className="mb-2">System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                </ul>
                <br />
                These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site. We may consider and approve other link requests from the following types of organizations:
                <ul className="list-disc list-inside ml-6">
                    <li className="mb-2">commonly-known consumer and/or business information sources;</li>
                    <li className="mb-2">dot.com community sites;</li>
                    <li className="mb-2">associations or other groups representing charities;</li>
                    <li className="mb-2">online directory distributors;</li>
                    <li className="mb-2">internet portals;</li>
                    <li className="mb-2">accounting, law and consulting firms; and</li>
                    <li className="mb-2">educational institutions and trade associations.</li>
                </ul>
                <br />
                We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of <strong>Qwizz</strong>; and (d) the link is in the context of general resource information.<br /><br />

                These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.<br /><br />

                If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to <strong>Qwizz</strong>. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.<br /><br />

                Approved organizations may hyperlink to our Website as follows:
                <ul className="list-disc list-inside ml-6">
                    <li className="mb-2">By use of our corporate name; or</li>
                    <li className="mb-2">By use of the uniform resource locator being linked to; or</li>
                    <li className="mb-2">By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
                </ul>
                <br />
                No use of <strong>Qwizz</strong>'s logo or other artwork will be allowed for linking absent a trademark license agreement.
            </p>
            <h3 className="text-2xl font-bold">iFrames</h3>
            <p className="py-6">
                Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            </p>
            <h3 className="text-2xl font-bold">Content Liability</h3>
            <p className="py-6"> 
                We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.<br /><br />

                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature. <br /><br /><br /><br />
            </p>
        </div>
    );
}


export default Terms;