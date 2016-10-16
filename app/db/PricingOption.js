'use strict';

const Sequelize = require('sequelize');
const settings = require('./settings');
const sequelize = new Sequelize(`${settings.db.dialect}://${config.db.username}:${config.db.password}@${config.db.url}`);

//"PricingOptions": [
//   {
//     "Agents": [
//       2051604
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1188,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2fbjet%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1188.00%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_0df4fd73dd2a37428bffbbc4cd3b98a7%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a09"
//   },
//   {
//     "Agents": [
//       2816873
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1192.37,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2fifly%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1192.37%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a10"
//   },
//   {
//     "Agents": [
//       4035157
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1199,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2ftgau%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1199.00%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_6ad82f34c0c25dc31b4311b3ed43fa54%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a19"
//   },
//   {
//     "Agents": [
//       2044501
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1199.76,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2fbgau%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1199.76%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_308f553c7c28444f68bb6650b568f713%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a18"
//   },
//   {
//     "Agents": [
//       2040804
//     ],
//     "QuoteAgeInMinutes": 1,
//     "Price": 1206,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2fbett%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1206.00%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_4e15f604c9f397c7a225df1f744e017a%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a35"
//   },
//   {
//     "Agents": [
//       3933919
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1206.32,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2fskdo%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1206.32%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_349d93eb79ed13ea03b052051b90ced5%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a14"
//   },
//   {
//     "Agents": [
//       2042197
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1247.14,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2fbfau%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1247.14%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_48090e871ddf05eefdaa5aa9f4e77e23%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a14"
//   },
//   {
//     "Agents": [
//       2627413
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1262.11,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2fgtau%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1262.11%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_0d4aea5278ff06e101b21fdb2a6af7bb%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a15"
//   },
//   {
//     "Agents": [
//       3059061
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1262.12,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2fkore%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1262.12%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a01"
//   },
//   {
//     "Agents": [
//       2158097
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1262.85,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2fchpa%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1262.85%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_483bf7e0ed61337fdb850aa9d47cfaa5%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a22"
//   },
//   {
//     "Agents": [
//       2499507
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1286.1,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2ffly3%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1286.10%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_acb10c024741076ac38b84b38f46d67d%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a14"
//   },
//   {
//     "Agents": [
//       3986773
//     ],
//     "QuoteAgeInMinutes": 0,
//     "Price": 1299.12,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2ft2au%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1299.12%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_fee834074de5cd88eca0226788455bc7%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a56%3a57"
//   },
//   {
//     "Agents": [
//       2502997
//     ],
//     "QuoteAgeInMinutes": 2,
//     "Price": 1301.12,
//     "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=yKGbqNlXaX7XP21HvJ%2bNBrcBuh7u583VTHixrzPzZECd45XqKZcUxnAXnkZj2QkI&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fAU%2fen-gb%2fAUD%2ffnau%2f2%2f16692.13554.2016-11-01%2c13554.16692.2016-11-20%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32128%7c122%7c16692%7c2016-11-01T09%3a00%7c12409%7c2016-11-01T17%3a40%3bflight%7c-32128%7c907%7c12409%7c2016-11-02T13%3a00%7c13554%7c2016-11-02T16%3a30%2cflight%7c-32128%7c908%7c13554%7c2016-11-20T18%3a50%7c12409%7c2016-11-21T14%3a45%3bflight%7c-32128%7c121%7c12409%7c2016-11-21T18%3a45%7c16692%7c2016-11-22T06%3a55%26carriers%3d-32128%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d1301.12%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3db4c1b40c-0418-432f-a28e-4a5f55bbb12b%26deeplink_ids%3dap-northeast-1.prod_8994decf0551e11fcbb12755385be422%26commercial_filters%3dfalse%26q_datetime_utc%3d2016-10-11T09%3a55%3a24"
//   }


var Option = sequelize.define('option', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field:'id'
  },
  Name: {
    type: Sequelize.STRING,
    field: 'agent'
  },
  ImageUrl: {
    type: Sequelize.STRING,
    field: 'imageUrl'
  },
  Status: {
    type: Sequelize.STRING,
    field: 'status'
  },
  OptimisedForMobile: {
    type: Sequelize.STRING,
    field: 'optimisedForMobile'
  },
  Type: {
    type: Sequelize.STRING,
    field: 'type'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports.Option = Option;

function createOption(option) {
  return Option.create({
    ID: agent.id,
    Name: agent.name,
    ImageUrl: agent.imageUrl,
    Status: agent.status,
    OptimisedForMobile:agent.pptimisedForMobile,
    Type: agent.type
  });
}

module.exports.createOption = createOption;
