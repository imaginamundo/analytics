const data = { visitors: 0, languages: {}, urls: {} };

function countVisitors() { data.visitors++ };

function countLanguages(language) {
  if (data.languages[language]) {
    return data.languages[language]++;
  }
  return data.languages[language] = 1;
}

function countUrls(url) {
  url = new URL(url);
  console.log(url);
  const origin = url.origin;
  const pathname = url.pathname;
  if (data.urls[ origin + pathname ]) {
    return data.urls[ origin + pathname ] = {
      count: data.urls[ origin + pathname ].count + 1,
    };
  }
  return data.urls[ origin + pathname ] = {
    count: 1
  };
}

export { data };
export default function updateData(context) {
  const url = new URL(context.request.headers.get('Referer'));
  const hostname = url.hostname;

  if (hostname !== settings.hostname) return;
  
  /**
   * Possible informations:
   * - context.request.ip;
   * - context.request.ips;
   * - context.request.headers.get('User-Agent')
   */

  countVisitors();
  countLanguages(context.request.headers.get('accept-language'));
  countUrls(url);
}