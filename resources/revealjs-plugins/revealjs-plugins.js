{ src: 'https://gitlab.com/gacybercenter/theming/-/jobs/1034663755/artifacts/raw/revealjs-plugins/menu/menu.js', async: true },
{ src: 'https://gitlab.com/gacybercenter/theming/-/jobs/1034663755/artifacts/raw/revealjs-plugins/chalkboard/chalkboard.js', async: true },
{ src: 'https://gitlab.com/gacybercenter/theming/-/jobs/1034663755/artifacts/raw/revealjs-plugins/title-footer/title-footer.js', callback: function() { title_footer.initialize(); } },//not async because it may then not appear
{ src: 'https://gitlab.com/gacybercenter/theming/-/jobs/1034663755/artifacts/raw/revealjs-plugins/notes-pointer/notes-pointer.js', async: true },
{ src: 'https://gitlab.com/gacybercenter/theming/-/jobs/1034663755/artifacts/raw/revealjs-plugins/spotlight/spotlight.js' }, // does not work with current version of reveal.js
{ src: 'https://gitlab.com/gacybercenter/theming/-/jobs/1034663755/artifacts/raw/revealjs-plugins/skip-fragments/skip-fragments.js' }
