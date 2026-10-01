const promotionSiteConfig = Object.freeze({
  ga4MeasurementId: '',
  // Shared by every public page. Fill after the first draft ZIP upload.
  cwsExtensionId: '',
  cwsPublished: false,
  get cwsListingUrl() {
    return /^[a-p]{32}$/.test(this.cwsExtensionId) ? `https://chromewebstore.google.com/detail/${this.cwsExtensionId}` : '';
  },
  get cwsReviewsUrl() { return this.cwsListingUrl ? `${this.cwsListingUrl}/reviews` : ''; },
  uninstallFormUrl: 'https://docs.google.com/forms/d/1DtzFeW6UjlIDBxRt6QHnidH9aWfxWXLBKu_fuS4RC38/viewform',
});

const copy = {
  en: {
    languageLabel: 'Language', sitePages: 'Site pages', navWelcome: 'Welcome', navShare: 'Share', navPrivacy: 'Privacy policy', navUpdates: 'Updates',
    welcomeEyebrow: 'NITI for Chrome', welcomeTitle: 'NITI is installed and ready', welcomeLead: 'Pin NITI once and keep your daily tasks one click away.',
    stepOneTitle: 'Open Extensions', stepOneText: 'Select the puzzle-piece icon in the top-right corner of Chrome.',
    stepTwoTitle: 'Find and pin NITI', stepTwoText: 'Find NITI in the extension list, then select its pin icon.',
    stepThreeTitle: 'Open NITI anytime', stepThreeText: 'Use the NITI icon in your toolbar whenever you want to plan your day.',
    gettingStarted: 'Pin NITI in three steps', dashboard: 'Open NITI dashboard', dashboardUnavailable: 'Open NITI from the extension menu', footer: 'Your tasks stay in this browser.', pinScreenshotAlt: 'Chrome Extensions menu showing NITI and its pin control', openScreenshotAlt: 'Chrome toolbar showing the NITI icon', uninstallFormTitle: 'NITI uninstall feedback',
    shareEyebrow: 'NITI for Chrome', shareTitle: 'Share a calmer way to plan', shareLead: 'Send NITI to someone who wants a clearer day without another account.',
    copyLink: 'Copy Chrome Web Store link', copyUnavailable: 'The Chrome Web Store link will appear after publication.', copied: 'Link copied.', storeLink: 'Get NITI in Chrome Web Store',
    privacyEyebrow: 'NITI for Chrome', privacyTitle: 'Privacy, without a cloud account', privacyLead: 'NITI keeps your work where it belongs: in this browser.',
    privacyFormsTitle: 'Feedback forms', privacyFormsText: 'If you choose to send feedback or an uninstall response, Google Forms processes the information you enter.',
    privacyAnalyticsTitle: 'Analytics', privacyAnalyticsText: 'This site sends no analytics until its owner adds a GA4 Measurement ID. When enabled, GA4 receives only page and interaction events, browser language, and referral source.',
    privacyNoDataTitle: 'No task data', privacyNoDataText: 'Service pages do not receive your tasks, projects, browsing history, or extension settings.',
    uninstallEyebrow: 'NITI for Chrome', uninstallTitle: 'Help us make NITI clearer', uninstallLead: 'Your answer is optional and helps us understand what to improve next.', uninstallLoading: 'Loading the feedback form…',
    updatesEyebrow: 'NITI for Chrome', updatesTitle: 'What’s new in NITI', updatesLead: 'A quieter, more focused home for the day ahead.', updatesVersion: 'Version 1.0.10', updatesItemOne: 'Welcome, uninstall, privacy, and sharing pages are ready for a public launch.', updatesItemTwo: 'The new rating flow keeps feedback voluntary and routes it safely after publication.', updatesItemThree: 'Service pages now support English, Spanish, and Russian.',
  },
  ru: {
    languageLabel: 'Язык', sitePages: 'Страницы сайта', navWelcome: 'Приветствие', navShare: 'Поделиться', navPrivacy: 'Конфиденциальность', navUpdates: 'Обновления',
    welcomeEyebrow: 'NITI для Chrome', welcomeTitle: 'NITI установлен и готов к работе', welcomeLead: 'Закрепите NITI один раз — и ежедневные задачи будут в одном клике.',
    stepOneTitle: 'Откройте расширения', stepOneText: 'Нажмите иконку пазла в правом верхнем углу Chrome.',
    stepTwoTitle: 'Найдите и закрепите NITI', stepTwoText: 'Найдите NITI в списке расширений и нажмите иконку закрепления.',
    stepThreeTitle: 'Открывайте NITI в любой момент', stepThreeText: 'Нажимайте иконку NITI на панели, когда хотите спланировать день.',
    gettingStarted: 'Закрепите NITI за три шага', dashboard: 'Открыть дашборд NITI', dashboardUnavailable: 'Откройте NITI через меню расширений', footer: 'Ваши задачи остаются в этом браузере.', pinScreenshotAlt: 'Меню расширений Chrome с NITI и иконкой закрепления', openScreenshotAlt: 'Панель Chrome с иконкой NITI', uninstallFormTitle: 'Обратная связь после удаления NITI',
    shareEyebrow: 'NITI для Chrome', shareTitle: 'Поделитесь более спокойным способом планировать', shareLead: 'Отправьте NITI тому, кто хочет яснее видеть свой день без ещё одного аккаунта.',
    copyLink: 'Скопировать ссылку Chrome Web Store', copyUnavailable: 'Ссылка Chrome Web Store появится после публикации.', copied: 'Ссылка скопирована.', storeLink: 'Установить NITI из Chrome Web Store',
    privacyEyebrow: 'NITI для Chrome', privacyTitle: 'Конфиденциальность без облачного аккаунта', privacyLead: 'NITI хранит вашу работу там, где ей место: в этом браузере.',
    privacyFormsTitle: 'Формы обратной связи', privacyFormsText: 'Если вы решите отправить отзыв или ответ после удаления, Google Forms обрабатывает введённые вами данные.',
    privacyAnalyticsTitle: 'Аналитика', privacyAnalyticsText: 'Сайт не отправляет аналитику, пока владелец не добавит GA4 Measurement ID. После включения GA4 получает только события страниц и взаимодействий, язык браузера и источник перехода.',
    privacyNoDataTitle: 'Без данных задач', privacyNoDataText: 'Служебные страницы не получают ваши задачи, проекты, историю браузера или настройки расширения.',
    uninstallEyebrow: 'NITI для Chrome', uninstallTitle: 'Помогите сделать NITI понятнее', uninstallLead: 'Ответ необязателен, но поможет понять, что стоит улучшить дальше.', uninstallLoading: 'Загружаем форму обратной связи…',
    updatesEyebrow: 'NITI для Chrome', updatesTitle: 'Что нового в NITI', updatesLead: 'Более спокойное и собранное пространство для вашего дня.', updatesVersion: 'Версия 1.0.10', updatesItemOne: 'Страницы welcome, uninstall, privacy и share готовы к публичному запуску.', updatesItemTwo: 'Новый сценарий оценки оставляет отзыв добровольным и безопасно направляет после публикации.', updatesItemThree: 'Служебные страницы поддерживают английский, испанский и русский языки.',
  },
  es: {
    languageLabel: 'Idioma', sitePages: 'Páginas del sitio', navWelcome: 'Bienvenida', navShare: 'Compartir', navPrivacy: 'Privacidad', navUpdates: 'Novedades',
    welcomeEyebrow: 'NITI para Chrome', welcomeTitle: 'NITI está instalado y listo', welcomeLead: 'Fija NITI una vez y tendrás tus tareas diarias a un clic.',
    stepOneTitle: 'Abre Extensiones', stepOneText: 'Selecciona el icono de pieza de rompecabezas en la esquina superior derecha de Chrome.',
    stepTwoTitle: 'Busca y fija NITI', stepTwoText: 'Busca NITI en la lista de extensiones y selecciona su icono de fijar.',
    stepThreeTitle: 'Abre NITI en cualquier momento', stepThreeText: 'Usa el icono de NITI en la barra cuando quieras planificar tu día.',
    gettingStarted: 'Fija NITI en tres pasos', dashboard: 'Abrir el panel de NITI', dashboardUnavailable: 'Abre NITI desde el menú de extensiones', footer: 'Tus tareas permanecen en este navegador.', pinScreenshotAlt: 'Menú de extensiones de Chrome con NITI y su control para fijar', openScreenshotAlt: 'Barra de Chrome con el icono de NITI', uninstallFormTitle: 'Comentarios al desinstalar NITI',
    shareEyebrow: 'NITI para Chrome', shareTitle: 'Comparte una forma más tranquila de planificar', shareLead: 'Envía NITI a alguien que quiere ver su día con más claridad sin otra cuenta.',
    copyLink: 'Copiar enlace de Chrome Web Store', copyUnavailable: 'El enlace de Chrome Web Store aparecerá tras la publicación.', copied: 'Enlace copiado.', storeLink: 'Instalar NITI desde Chrome Web Store',
    privacyEyebrow: 'NITI para Chrome', privacyTitle: 'Privacidad sin cuenta en la nube', privacyLead: 'NITI guarda tu trabajo donde corresponde: en este navegador.',
    privacyFormsTitle: 'Formularios de comentarios', privacyFormsText: 'Si eliges enviar comentarios o una respuesta de desinstalación, Google Forms procesa la información que introduces.',
    privacyAnalyticsTitle: 'Analítica', privacyAnalyticsText: 'Este sitio no envía analítica hasta que su propietario añada un ID de medición de GA4. Cuando se activa, GA4 recibe solo eventos de página e interacción, idioma del navegador y fuente de referencia.',
    privacyNoDataTitle: 'Sin datos de tareas', privacyNoDataText: 'Las páginas de servicio no reciben tus tareas, proyectos, historial de navegación ni ajustes de la extensión.',
    uninstallEyebrow: 'NITI para Chrome', uninstallTitle: 'Ayúdanos a hacer NITI más claro', uninstallLead: 'Tu respuesta es opcional y nos ayuda a saber qué mejorar después.', uninstallLoading: 'Cargando el formulario de comentarios…',
    updatesEyebrow: 'NITI para Chrome', updatesTitle: 'Novedades de NITI', updatesLead: 'Un hogar más tranquilo y centrado para el día que tienes por delante.', updatesVersion: 'Versión 1.0.10', updatesItemOne: 'Las páginas de bienvenida, desinstalación, privacidad y compartir están listas para el lanzamiento público.', updatesItemTwo: 'El nuevo flujo de calificación mantiene los comentarios voluntarios y los dirige de forma segura tras la publicación.', updatesItemThree: 'Las páginas de servicio ya admiten inglés, español y ruso.',
  },
};

Object.assign(copy.en, {
  homeNavFeatures: 'Features', homeNavStart: 'Get started', homeEyebrow: 'A clearer day starts here', homeTitle: 'Daily Task Planner for a Clearer Day.',
  homeLead: 'Capture tasks in one click, choose your Daily Focus, and see the rest of your plan in a calm Chrome dashboard. No account needed.',
  homeStorePending: 'Coming to Chrome Web Store', homeExplore: 'Explore features ↘', homeHeroNote: 'Works offline · Your tasks stay in your browser',
  homeFeaturesEyebrow: 'One place for the day ahead', homeFeaturesTitle: 'Simple when you start. Flexible when you need more.', homeFeaturesLead: 'Begin with a single task. Add structure as your plans grow.',
  homeFocusTitle: 'Choose your Daily Focus', homeFocusText: 'Keep the work you chose for today in view. Unfinished focus tasks stay there until you complete or remove them.',
  homeCaptureTitle: 'Capture without friction', homeCaptureText: 'Add and complete tasks from the popup, then open the dashboard for a wider view.',
  homeProjectsTitle: 'Give plans a place', homeProjectsText: 'Group related work in projects, connect projects to goals, and filter tasks by what matters.',
  homeRoutineTitle: 'Plan what repeats', homeRoutineText: 'Schedule recurring tasks, set reminders, and optionally move overdue work forward.',
  homePrivateTitle: 'Your work stays yours', homePrivateText: 'Core planning works offline. Tasks and projects stay in this browser, with a manual backup when you need one.',
  homeStartEyebrow: 'Get started', homeStartTitle: 'From first thought to a clearer day.', homeStepOneTitle: 'Add a task', homeStepOneText: 'A title is enough. Capture it in the popup or dashboard.',
  homeStepTwoTitle: 'Pick your focus', homeStepTwoText: 'Choose the work that deserves your attention today.', homeStepThreeTitle: 'Keep moving', homeStepThreeText: 'Complete it, or set a reminder for later.',
  homePinLabel: 'Keep NITI one click away', homeFinalEyebrow: 'Start small. Stay clear.', homeFinalTitle: 'One task is enough to begin.', homeFinalText: "NITI grows with your list, from today's focus to projects, routines, and reminders.",
});
Object.assign(copy.ru, {
  homeNavFeatures: 'Возможности', homeNavStart: 'Как начать', homeEyebrow: 'Ясный день начинается здесь', homeTitle: 'Планировщик задач на день без лишнего шума.',
  homeLead: 'Добавляйте задачи в один клик, выбирайте фокус дня и смотрите остальные планы в удобном дашборде Chrome. Регистрация не нужна.',
  homeStorePending: 'Скоро в Chrome Web Store', homeExplore: 'Смотреть возможности ↘', homeHeroNote: 'Работает офлайн · Задачи остаются в вашем браузере',
  homeFeaturesEyebrow: 'Всё для планов на день', homeFeaturesTitle: 'Просто начать. Удобно развивать планы.', homeFeaturesLead: 'Начните с одной задачи. Добавляйте структуру по мере необходимости.',
  homeFocusTitle: 'Выбирайте фокус дня', homeFocusText: 'Держите выбранные на сегодня задачи перед глазами. Незавершённые остаются в фокусе, пока вы их не выполните или не уберёте.',
  homeCaptureTitle: 'Быстро записывайте задачи', homeCaptureText: 'Добавляйте и завершайте задачи во всплывающем окне, а для планирования открывайте дашборд.',
  homeProjectsTitle: 'Собирайте планы в проекты', homeProjectsText: 'Группируйте связанные задачи, связывайте проекты с целями и находите нужное с помощью фильтров.',
  homeRoutineTitle: 'Планируйте повторяющееся', homeRoutineText: 'Создавайте повторяющиеся задачи, ставьте напоминания и при желании переносите просроченные задачи.',
  homePrivateTitle: 'Ваши данные — под вашим контролем', homePrivateText: 'Основные функции работают офлайн. Задачи и проекты остаются в этом браузере; при необходимости можно сделать резервную копию.',
  homeStartEyebrow: 'Как начать', homeStartTitle: 'От первой мысли к ясному плану.', homeStepOneTitle: 'Добавьте задачу', homeStepOneText: 'Достаточно названия. Запишите задачу во всплывающем окне или дашборде.',
  homeStepTwoTitle: 'Выберите фокус', homeStepTwoText: 'Отметьте то, чему хотите уделить внимание сегодня.', homeStepThreeTitle: 'Продолжайте движение', homeStepThreeText: 'Завершите задачу или поставьте напоминание на потом.',
  homePinLabel: 'NITI всегда в одном клике', homeFinalEyebrow: 'Начните с малого. Сохраняйте ясность.', homeFinalTitle: 'Для начала хватит одной задачи.', homeFinalText: 'NITI растёт вместе с вашим списком: от фокуса дня до проектов, повторов и напоминаний.',
});
Object.assign(copy.es, {
  homeNavFeatures: 'Funciones', homeNavStart: 'Cómo empezar', homeEyebrow: 'Un día más claro empieza aquí', homeTitle: 'Planificador diario de tareas para un día más claro.',
  homeLead: 'Anota tareas en un clic, elige tu enfoque diario y consulta el resto de tu plan en un panel tranquilo de Chrome. Sin cuenta.',
  homeStorePending: 'Próximamente en Chrome Web Store', homeExplore: 'Explorar funciones ↘', homeHeroNote: 'Funciona sin conexión · Tus tareas se quedan en tu navegador',
  homeFeaturesEyebrow: 'Un lugar para el día que viene', homeFeaturesTitle: 'Sencillo al empezar. Flexible cuando necesitas más.', homeFeaturesLead: 'Empieza con una tarea. Añade estructura a medida que crezcan tus planes.',
  homeFocusTitle: 'Elige tu enfoque diario', homeFocusText: 'Mantén a la vista las tareas que elegiste para hoy. Las pendientes permanecen hasta que las termines o las quites.',
  homeCaptureTitle: 'Anota sin interrupciones', homeCaptureText: 'Añade y completa tareas en la ventana emergente; abre el panel para tener más espacio.',
  homeProjectsTitle: 'Da un lugar a tus planes', homeProjectsText: 'Agrupa tareas en proyectos, conecta proyectos con objetivos y filtra lo que necesitas ver.',
  homeRoutineTitle: 'Planifica lo que se repite', homeRoutineText: 'Programa tareas recurrentes, establece recordatorios y, si quieres, mueve las tareas atrasadas.',
  homePrivateTitle: 'Tus datos siguen siendo tuyos', homePrivateText: 'La planificación básica funciona sin conexión. Las tareas y proyectos se guardan en este navegador, con copia de seguridad manual.',
  homeStartEyebrow: 'Cómo empezar', homeStartTitle: 'De la primera idea a un día más claro.', homeStepOneTitle: 'Añade una tarea', homeStepOneText: 'Basta con un título. Anótala en la ventana emergente o en el panel.',
  homeStepTwoTitle: 'Elige tu enfoque', homeStepTwoText: 'Selecciona el trabajo al que quieres prestar atención hoy.', homeStepThreeTitle: 'Sigue adelante', homeStepThreeText: 'Complétala o establece un recordatorio para más tarde.',
  homePinLabel: 'NITI siempre a un clic', homeFinalEyebrow: 'Empieza poco a poco. Mantén la claridad.', homeFinalTitle: 'Una tarea basta para empezar.', homeFinalText: 'NITI crece con tu lista: del enfoque diario a proyectos, rutinas y recordatorios.',
});

const params = new URLSearchParams(window.location.search);
const hasPublishedListing = promotionSiteConfig.cwsPublished && Boolean(promotionSiteConfig.cwsListingUrl);
const isLanguage = (value) => Object.hasOwn(copy, value);
let language = isLanguage(params.get('lang')) ? params.get('lang') : (isLanguage(localStorage.getItem('niti-service-language')) ? localStorage.getItem('niti-service-language') : 'en');
let text = copy.en;

function updateDashboardLink() {
  const dashboardLink = document.querySelector('[data-dashboard-link]');
  if (!dashboardLink) return;
  const extensionId = params.get('extensionId');
  if (/^[a-p]{32}$/.test(extensionId || '')) {
    dashboardLink.href = `chrome-extension://${extensionId}/dashboard.html`;
    dashboardLink.classList.remove('is-disabled');
    dashboardLink.removeAttribute('aria-disabled');
  } else {
    dashboardLink.removeAttribute('href');
    dashboardLink.classList.add('is-disabled');
    dashboardLink.setAttribute('aria-disabled', 'true');
    dashboardLink.textContent = text.dashboardUnavailable;
  }
}

function updateCopyButton() {
  const copyButton = document.querySelector('[data-copy-listing]');
  const copyStatus = document.querySelector('[data-copy-status]');
  if (!copyButton || !copyStatus) return;
  if (!hasPublishedListing) {
    copyButton.disabled = true;
    copyStatus.textContent = text.copyUnavailable;
  }
}

function updateStoreLink() {
  document.querySelectorAll('[data-cws-pending]').forEach((status) => { status.hidden = hasPublishedListing; });
  document.querySelectorAll('[data-cws-link]').forEach((link) => {
    if (!hasPublishedListing) return;
    link.href = promotionSiteConfig.cwsListingUrl;
    link.hidden = false;
  });
}

function applyLanguage(nextLanguage) {
  language = isLanguage(nextLanguage) ? nextLanguage : 'en';
  text = copy[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = text[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = text[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = text[element.dataset.i18nAlt];
    if (value) element.setAttribute('alt', value);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const value = text[element.dataset.i18nTitle];
    if (value) element.setAttribute('title', value);
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  updateDashboardLink();
  updateCopyButton();
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => {
    const nextLanguage = button.dataset.language;
    if (!isLanguage(nextLanguage)) return;
    localStorage.setItem('niti-service-language', nextLanguage);
    applyLanguage(nextLanguage);
  });
});

const copyButton = document.querySelector('[data-copy-listing]');
const copyStatus = document.querySelector('[data-copy-status]');
if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    if (!hasPublishedListing) return;
    await navigator.clipboard.writeText(promotionSiteConfig.cwsListingUrl);
    copyStatus.textContent = text.copied;
    track('share_copy_link', { language });
  });
}

const uninstallFrame = document.querySelector('[data-uninstall-form]');
if (uninstallFrame && /^https:\/\//.test(promotionSiteConfig.uninstallFormUrl)) {
  const separator = promotionSiteConfig.uninstallFormUrl.includes('?') ? '&' : '?';
  uninstallFrame.src = `${promotionSiteConfig.uninstallFormUrl}${separator}embedded=true`;
}

function track(name, parameters = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', name, parameters);
}

function enableAnalytics() {
  const id = promotionSiteConfig.ga4MeasurementId;
  if (!/^G-[A-Z0-9]+$/.test(id)) return;
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.append(tag);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id, { send_page_view: true });
}

applyLanguage(language);
updateStoreLink();
enableAnalytics();
track(`${document.body.dataset.page}_view`, { language, source: params.get('source') || 'direct' });
