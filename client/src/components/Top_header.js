import React from 'react'

export default function Top_header() {
    // Find all elements with the class '.skiptranslate'
    var skipTranslateElements = document.querySelectorAll('.skiptranslate');

    // Loop through each found element
    skipTranslateElements.forEach(function (parentElement) {
        // Find the child element with the class '.VIpgJd-ZVi9od-l4eHX-hSRGPd'
        var poweredByElement = parentElement.querySelector('.VIpgJd-ZVi9od-l4eHX-hSRGPd');

        // Check if the poweredByElement exists and if its text content contains 'Powered by'
        if (poweredByElement && poweredByElement.textContent.includes('Powered by')) {
            // Remove the poweredByElement from its parent
            poweredByElement.parentNode.removeChild(poweredByElement);
        }
    });

    return (
        <div className="top-header flex w-100 justify-between px-2 items-center bg-red-500">
            <div className="phone-email flex text-white">
                <div className="phone-number">
                    <a href="tel:+07186295112">07186-295112</a>
                </div>
                /
                <div className="phone-number">
                    <a href="mailto:office.gpsakoli@dtemaharashtra.gov.in"><u> office.gpsakoli@dtemaharashtra.gov.in</u></a>
                </div>
            </div>
            <div className="language-change-container flex items-center">

                <div id="google_translate_element"></div>
                <div className="font-change flex font-bold text-white mx-2">
                    <div id="font-inc"> A+ </div> / <div id="font-dec"> A- </div>
                </div>
            </div>
        </div>
    )
}
