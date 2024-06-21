import React, { FC } from 'react';
import {badges, renderBadges} from 'badges';
import * as pkg from 'badges'

const list = [
    // Custom Badges
    ['badge', { image: 'image', alt: 'alt' }],
    ['badge', { image: 'image', alt: 'alt', url: 'url', title: 'title' }],
    [
        'shields',
        {
            left: 'left',
            right: 'right',
            alt: 'alt',
            url: 'url',
            title: 'title',
        },
    ],
    [
        'shields',
        {
            left: 'left',
            right: 'right',
            color: 'red',
            alt: 'alt',
            url: 'url',
            title: 'title',
        },
    ],
    '---',
    // Development Badges
    'npmversion',
    'npmdownloads',
    'daviddm',
    'daviddmdev',
    'nodeico',
    '---',
    // Testing Badges
    'saucelabsbm',
    'saucelabs',
    'travisci',
    'codeship',
    'coveralls',
    'codeclimate',
    'bithound',
    'waffle',
    '---',
    // Funding Badges
    'sixtydevstips',
    'patreon',
    'opencollective',
    'gratipay',
    'flattr',
    'paypal',
    'bitcoin',
    'wishlist',
    '---',
    // Social Badges
    'slackinscript',
    'slackin',
    'gabeacon',
    'googleplusone',
    'redditsubmit',
    'hackernewssubmit',
    'facebooklike',
    'facebookfollow',
    'twittertweet',
    'twitterfollow',
    'githubfollow',
    'githubstar',
    'quorafollow',
]

// Configuration for the badges
const config = {
    npmPackageName: 'badges',

    saucelabsUsername: 'bevry',
    saucelabsAuthToken: '123',
    codeshipProjectUUID: '123',
    codeshipProjectID: '123',
    githubSlug: 'bevry/badges',
    nodeicoQueryString: { downloads: true, compact: true, height: 2 },

    sixtydevstipsID: 'd2dcf439c9759e88f3ccec1cef394c10',
    patreonUsername: 'bevry',
    opencollectiveUsername: 'bevry',
    gratipayUsername: 'bevry',
    flattrUsername: 'balupton',
    paypalURL: 'https://paypal.me/bevry',
    paypalButtonID: 'QB8GQPZAH84N6', // another option instead of paypalURL
    paypalUsername: 'bevry', // another option instead of paypalURL
    bitcoinURL: 'https://bevry.me/bitcoin',
    wishlistURL: 'https://bevry.me/wishlist',

    slackinURL: 'https://slack.bevry.me',
    gaTrackingID: 'UA-XXXXX-XX',
    homepage: 'https://bevry.me',
    facebookApplicationID: '123123',
    facebookUsername: 'balupton',
    twitterUsername: 'bevryme',
    githubUsername: 'balupton',
    quoraUsername: 'Benjamin-Lupton',
    quoraRealname: 'Benjamin Arthur Lupton', // optional, will extract from username
}

// Options for rendering the badges
const options = {
    // Filter Category
    // When set to a string, will only render badges from the list that of the specified category
    // Values can be 'development', 'testing', 'funding', or 'social'
    // E.g. to render only funding badges, set to 'funding'
    filterCategory: false,

    // Filter Scripts
    // When true, do not render any badges from the list that are scripts
    filterScripts: false,
}

// Render the badges to a string
const result = renderBadges(list, config, options)

// Output the result
console.log(result)


// const BadgeComponent: FC = () => {
//     const pkg = require('badges')
//     const successBadge = badges.renderBadge({
//         label: 'Success',
//         message: 'Operation was successful',
//         color: 'green'
//     });
//
//     const warningBadge = badges.renderBadge({
//         label: 'Warning',
//         message: 'This is a warning',
//         color: 'orange'
//     });
//
//     const errorBadge = badges.renderBadge({
//         label: 'Error',
//         message: 'An error occurred',
//         color: 'red'
//     });
//
//     return (
//         <div>
//             <h1>Badges Example</h1>
//             <div dangerouslySetInnerHTML={{ __html: successBadge }} />
//             <div dangerouslySetInnerHTML={{ __html: warningBadge }} />
//             <div dangerouslySetInnerHTML={{ __html: errorBadge }} />
//         </div>
//     );
// };
//
// export default BadgeComponent;
