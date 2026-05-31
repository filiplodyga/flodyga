const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 28, 220)}ms`;
  observer.observe(el);
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const typedWord = document.querySelector('#typed-word');
const words = ['Excel VBA', 'Data analytics', 'Business insights'];

if (typedWord) {
  let wordIndex = 0;
  let charIndex = typedWord.textContent.length;
  let isDeleting = false;

  const type = () => {
    const word = words[wordIndex];
    typedWord.textContent = word.slice(0, charIndex);

    if (!isDeleting && charIndex < word.length) {
      charIndex += 1;
      setTimeout(type, 105);
      return;
    }

    if (!isDeleting && charIndex === word.length) {
      isDeleting = true;
      setTimeout(type, 1700);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(type, 58);
      return;
    }

    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 280);
  };

  setTimeout(type, 700);
}

let currentLang = 'pl';

const textTranslations = {
  en: {
    'Filip Łodyga': 'Filip Łodyga',
    'Menu': 'Menu',
    'Dla kogo': 'Audience',
    'Usługi': 'Services',
    'Współpraca': 'Engagement',
    'Podejście': 'Approach',
    'Projekty': 'Projects',
    'Kontakt': 'Contact',
    'Skontaktuj się': 'Contact me',
    'Controlling &': 'Controlling &',
    'Controlling, który daje decyzje. Automatyzacja, która oszczędza czas.': 'Controlling that supports decisions. Automation that saves time.',
    'Pomagam firmom uporządkować raportowanie finansowe, zautomatyzować pracę w Excelu i szybciej widzieć, co dzieje się z kosztami, marżą, cash flow i KPI.': 'I help companies organize financial reporting, automate Excel work and see what is happening with costs, margin, cash flow and KPIs faster.',
    'Porozmawiajmy o Twoim raporcie': 'Let’s talk about your report',
    'Dla rekrutera i dla firmy': 'For recruiters and businesses',
    'Controlling finansowy': 'Financial controlling',
    'Raportowanie zarządcze': 'Management reporting',
    'Excel / VBA': 'Excel / VBA',
    'Power Query': 'Power Query',
    'Dashboardy': 'Dashboards',
    'R2R': 'R2R',
    'SQL': 'SQL',
    'Dwie ścieżki': 'Two paths',
    'Profil zawodowy i zakres wsparcia finansowego w jednym miejscu.': 'Professional profile and finance support scope in one place.',
    'Łączę perspektywę controllingu, raportowania i praktycznej automatyzacji. Dlatego mogę być zarówno kandydatem do roli finansowej, jak i partnerem przy konkretnym projekcie.': 'I combine a controlling, reporting and practical automation perspective. That makes me relevant both as a finance-role candidate and as a partner for specific projects.',
    'Dla rekrutera': 'For recruiters',
    'Financial controlling, R2R i praca z biznesem': 'Financial controlling, R2R and business-facing work',
    'Profil zawodowy oparty na controllingu, księgowości, R2R, analizie odchyleń, raportowaniu KPI i usprawnianiu procesów finansowych.': 'A professional profile based on controlling, accounting, R2R, variance analysis, KPI reporting and finance process improvement.',
    'doświadczenie w finansach, GL/R2R i controllingu,': 'experience in finance, GL/R2R and controlling,',
    'praktyczna znajomość Excel, VBA, Power Query, SQL i analizy danych,': 'practical knowledge of Excel, VBA, Power Query, SQL and data analysis,',
    'nastawienie na business partnering, jakość danych i odpowiedzialność za proces.': 'focus on business partnering, data quality and process ownership.',
    'Zobacz profil zawodowy': 'View professional profile',
    'Dla firmy': 'For companies',
    'Controlling na godziny i automatyzacja raportowania': 'Hourly controlling support and reporting automation',
    'Wsparcie projektowe dla MŚP, właścicieli firm, CFO, działów finansowych i managerów, którzy chcą ograniczyć ręczną pracę w raportach.': 'Project-based support for SMEs, business owners, CFOs, finance teams and managers who want to reduce manual work in reporting.',
    'audyt obecnego raportu, pliku lub procesu,': 'audit of an existing report, file or process,',
    'dashboard, model Excel lub automatyzacja Power Query/VBA,': 'dashboard, Excel model or Power Query/VBA automation,',
    'cykliczne wsparcie przy KPI, kosztach, marży, budżecie i forecastach.': 'recurring support with KPIs, costs, margin, budgeting and forecasts.',
    'Opisz proces do usprawnienia': 'Describe the process to improve',
    'W czym mogę pomóc': 'How I can help',
    'Automatyzacja raportów, analiza danych i dashboardy dla finansów.': 'Report automation, data analysis and dashboards for finance.',
    'Wspieram controlling i kontrolling finansowy: raporty zarządcze, analizę kosztów, marży, KPI oraz automatyzację cyklicznych raportów w Excelu, VBA, Power Query i SQL.': 'I support financial controlling: management reports, cost, margin and KPI analysis, plus recurring report automation in Excel, VBA, Power Query and SQL.',
    'Raportowanie zarządcze i controlling': 'Management reporting and controlling',
    'Raporty miesięczne, analiza kosztów, przychodów i marż, budżet vs actual, KPI finansowe i komentarze do business review.': 'Monthly reports, cost, revenue and margin analysis, budget vs actual, financial KPIs and comments for business reviews.',
    'Automatyzacja Excel, VBA i Power Query': 'Excel, VBA and Power Query automation',
    'Automatyzacja raportów Excel: importy, walidacje, czyszczenie danych, makra i przebudowa arkuszy, które dziś wymagają ręcznego kopiowania.': 'Excel report automation: imports, validations, data cleaning, macros and rebuilding spreadsheets that currently require manual copying.',
    'Dashboardy i raporty finansowe': 'Financial dashboards and reports',
    'Modele danych, dashboardy KPI, widoki dla zarządu i managerów oraz raporty sprzedaży, kosztów, rentowności, marży i cash flow.': 'Data models, KPI dashboards, views for management and reports for sales, costs, profitability, margin and cash flow.',
    'Budżetowanie, forecast i analiza odchyleń': 'Budgeting, forecasting and variance analysis',
    'Wsparcie przy planowaniu, kontroli wykonania, analizie różnic, scenariuszach i prezentacji wniosków dla właściciela lub managementu.': 'Support with planning, performance tracking, variance analysis, scenarios and presenting conclusions to owners or management.',
    'R2R, uzgodnienia i IC reconciliation': 'R2R, reconciliations and IC reconciliation',
    'Checklisty zamknięcia miesiąca, uzgodnienia sald, kontrole danych, trackery statusów i automatyzacja plików kontrolnych.': 'Month-end close checklists, balance reconciliations, data controls, status trackers and automation of control files.',
    'Kiedy warto porozmawiać': 'When it is worth talking',
    'Jeśli raportowanie działa, ale kosztuje zbyt dużo czasu i uwagi.': 'When reporting works, but takes too much time and attention.',
    'Raporty zajmują za dużo czasu': 'Reports take too much time',
    'Automatyzuję cykliczne raporty, żeby miesięczne zamknięcie nie oznaczało ręcznego kopiowania danych między plikami.': 'I automate recurring reports so month-end close does not mean manually copying data between files.',
    'Dane są rozproszone': 'Data is scattered',
    'Łączę eksporty z systemów, pliki Excel i ręczne źródła w jeden model danych, który można odświeżać i kontrolować.': 'I combine system exports, Excel files and manual sources into one data model that can be refreshed and controlled.',
    'Brakuje kontroli nad wynikiem': 'There is not enough control over performance',
    'Buduję raporty pokazujące koszty, marżę, cash flow, KPI i odchylenia w formie przydatnej do decyzji biznesowych.': 'I build reports that show costs, margin, cash flow, KPIs and variances in a form useful for business decisions.',
    'Proces jest zależny od jednej osoby': 'The process depends on one person',
    'Dokumentuję logikę, upraszczam arkusze i tworzę rozwiązania, które mogą przejąć inni członkowie zespołu.': 'I document logic, simplify spreadsheets and create solutions that other team members can take over.',
    'Jak pracuję': 'How I work',
    'Pracuję od problemu biznesowego, nie od narzędzia.': 'I start from the business problem, not from the tool.',
    'Diagnoza': 'Diagnosis',
    'proces i problem': 'process and problem',
    'Model danych': 'Data model',
    'logika i kontrola': 'logic and control',
    'Automatyzacja': 'Automation',
    'raport lub tracker': 'report or tracker',
    'Przekazanie': 'Handover',
    'instrukcja i kontrola': 'instructions and control',
    'Najpierw ustalam, jaka decyzja ma być podejmowana na podstawie raportu. Dopiero potem dobieram Excel, Power Query, VBA, SQL albo prostszą zmianę procesu.': 'First, I define what decision the report should support. Only then do I choose Excel, Power Query, VBA, SQL or a simpler process change.',
    'Projekt rozwiązania': 'Solution design',
    'Mapuję obecny proces, źródła danych, punkty ręcznej pracy i miejsca, w których pojawiają się błędy.': 'I map the current process, data sources, manual work points and places where errors appear.',
    'Ustalam docelowy przepływ danych, logikę raportową, zakres automatyzacji i format wyniku.': 'I define the target data flow, reporting logic, automation scope and output format.',
    'Budowa i testy': 'Build and testing',
    'Tworzę raport, model, plik lub automatyzację oraz sprawdzam wynik na realnych danych.': 'I build the report, model, file or automation and test the result on real data.',
    'Dokumentuję logikę, pokazuję sposób użycia i zostawiam rozwiązanie możliwe do utrzymania przez zespół.': 'I document the logic, show how to use it and leave a solution the team can maintain.',
    'Case studies': 'Case studies',
    'Przykłady projektów, które najlepiej pokazują mój sposób pracy.': 'Project examples that best show how I work.',
    'Poniższe przykłady są zanonimizowane i opisują typowe sytuacje w controllingu, raportowaniu zarządczym i automatyzacji finansów.': 'The examples below are anonymized and describe common situations in controlling, management reporting and finance automation.',
    'Management reporting': 'Management reporting',
    'Automatyzacja raportu miesięcznego': 'Monthly report automation',
    'Automatyzacja miesięcznego raportu zarządczego': 'Monthly management report automation',
    'Problem': 'Problem',
    'Raport wymagał ręcznego łączenia wielu plików i kontroli wersji.': 'The report required manually combining multiple files and controlling versions.',
    'Rozwiązanie': 'Solution',
    'Model Power Query, uporządkowana struktura danych i dashboard wynikowy.': 'Power Query model, structured data flow and output dashboard.',
    'Efekt': 'Outcome',
    'Krótszy czas przygotowania raportu, mniej błędów i łatwiejsza analiza odchyleń.': 'Shorter report preparation time, fewer errors and easier variance analysis.',
    'Zobacz szczegóły': 'View details',
    'Dashboard / KPI': 'Dashboard / KPI',
    'Dashboard KPI dla zarządu': 'KPI dashboard for management',
    'Kluczowe wskaźniki były dostępne w różnych plikach i nie dawały jednego obrazu biznesu.': 'Key indicators were available in different files and did not provide one business view.',
    'Dashboard z widokiem na sprzedaż, marżę, koszty i trendy.': 'Dashboard with a view of sales, margin, costs and trends.',
    'Szybsze spotkania zarządcze i decyzje oparte na aktualnych danych.': 'Faster management meetings and decisions based on current data.',
    'Excel / VBA / controls': 'Excel / VBA / controls',
    'Usprawnienie pliku controllingowego': 'Controlling file improvement',
    'Arkusz był rozbudowany, podatny na błędy i trudny do przejęcia przez inne osoby.': 'The spreadsheet was complex, error-prone and difficult for others to take over.',
    'Przebudowa logiki, automatyzacja VBA, walidacje i dokumentacja.': 'Logic redesign, VBA automation, validations and documentation.',
    'Stabilniejszy proces i mniejsze ryzyko błędów w raportowaniu.': 'A more stable process and lower reporting error risk.',
    'Projekty w praktyce': 'Projects in practice',
    'Od ręcznej pracy w Excelu do powtarzalnego raportowania.': 'From manual Excel work to repeatable reporting.',
    'Każdy projekt zaczyna się od pytania: jaką decyzję ma wspierać raport i gdzie dziś powstaje ryzyko błędu lub strata czasu.': 'Every project starts with the question: what decision should the report support and where does the risk of error or time loss appear today?',
    '01 / Reporting': '01 / Reporting',
    'Projekt zamienia ręczny proces raportowania w powtarzalny model oparty o Power Query lub Excel. Celem jest mniej kontroli wersji, mniej ręcznych korekt i szybsza analiza odchyleń.': 'The project turns a manual reporting process into a repeatable model based on Power Query or Excel. The goal is fewer version checks, fewer manual corrections and faster variance analysis.',
    'mapowanie źródeł danych, właścicieli i logiki raportu,': 'mapping data sources, owners and report logic,',
    'automatyczne odświeżanie danych i kontrole kompletności,': 'automatic data refresh and completeness checks,',
    'finalny raport gotowy do cyklicznego użycia przez zespół.': 'a final report ready for recurring team use.',
    '02 / Dashboard': '02 / Dashboard',
    'Dashboard KPI dla właściciela lub zarządu': 'KPI dashboard for owner or management',
    'Dashboard porządkuje najważniejsze wskaźniki: sprzedaż, koszty, marżę, cash flow, trendy i odchylenia. Raport ma być czytelny dla decyzji, a nie tylko poprawny technicznie.': 'The dashboard organizes key indicators: sales, costs, margin, cash flow, trends and variances. The report should support decisions, not only be technically correct.',
    'model danych i logika KPI dopasowana do biznesu,': 'data model and KPI logic tailored to the business,',
    'widoki dla zarządu, managerów lub właściciela firmy,': 'views for management, managers or the business owner,',
    'szybsze spotkania i mniej dyskusji o tym, która wersja danych jest właściwa.': 'faster meetings and fewer discussions about which data version is correct.',
    '03 / Excel automation': '03 / Excel automation',
    'Przebudowa arkusza obejmuje logikę obliczeń, walidacje, automatyzację VBA lub Power Query oraz dokumentację. Efekt ma być możliwy do utrzymania, nie zależny od jednej osoby.': 'The spreadsheet redesign covers calculation logic, validations, VBA or Power Query automation and documentation. The result should be maintainable, not dependent on one person.',
    'ograniczenie ręcznego kopiowania i wklejania danych,': 'reducing manual copy-paste work,',
    'walidacje braków, duplikatów i niespójnych formatów,': 'validations for missing data, duplicates and inconsistent formats,',
    'instrukcja obsługi i rekomendacje dalszego rozwoju pliku.': 'user instructions and recommendations for further file development.',
    'Before / After': 'Before / After',
    'Efekt, którego szukam w projektach.': 'The outcome I look for in projects.',
    'Przed': 'Before',
    'ręczne kopiowanie danych,': 'manual data copying,',
    'wiele wersji tego samego raportu,': 'many versions of the same report,',
    'niejasna logika KPI,': 'unclear KPI logic,',
    'proces trudny do przekazania innej osobie.': 'a process difficult to hand over to another person.',
    'Po': 'After',
    'jedna wersja prawdy,': 'one version of the truth,',
    'automatyczne odświeżanie danych,': 'automatic data refresh,',
    'czytelne odchylenia, koszty i marża,': 'clear variances, costs and margin,',
    'dokumentacja i kontrola jakości danych.': 'documentation and data quality controls.',
    'Kompetencje': 'Skills',
    'Kompetencje finansowe i techniczne, które łączą analizę z wykonaniem.': 'Finance and technical skills that connect analysis with execution.',
    'Finance': 'Finance',
    'Analiza odchyleń': 'Variance analysis',
    'Budgeting': 'Budgeting',
    'Forecasting': 'Forecasting',
    'GL accounting': 'GL accounting',
    'IC reconciliation': 'IC reconciliation',
    'KPI reporting': 'KPI reporting',
    'Data': 'Data',
    'Power Pivot': 'Power Pivot',
    'Modele danych': 'Data models',
    'Kontrole jakości danych': 'Data quality controls',
    'Dashboardy KPI': 'KPI dashboards',
    'Data analytics': 'Data analytics',
    'Automation': 'Automation',
    'Excel advanced': 'Advanced Excel',
    'Automatyczne raporty': 'Automated reports',
    'Walidacje': 'Validations',
    'Trackery': 'Trackers',
    'Procesy cykliczne': 'Recurring processes',
    'Dokumentacja': 'Documentation',
    'Business': 'Business',
    'Business partnering': 'Business partnering',
    'Prezentacja danych': 'Data presentation',
    'Stakeholder management': 'Stakeholder management',
    'Process improvement': 'Process improvement',
    'Rekomendacje dla managementu': 'Recommendations for management',
    'lat doświadczenia w finansach': 'years of experience in finance',
    'usprawnień i automatyzacji': 'improvements and automations',
    'obszary: controlling, RtR, automatyzacja, raporty, konsolidacja i raportowanie': 'areas: controlling, RtR, automation, reports, consolidation and reporting',
    'technologii: VBA, Python, SQL': 'technologies: VBA, Python, SQL',
    'Profil zawodowy': 'Professional profile',
    'Łączę perspektywę finansową z technicznym wykonaniem.': 'I combine a finance perspective with technical execution.',
    'Controlling i interpretacja wyniku': 'Controlling and performance interpretation',
    'Jestem kontrolerem finansowym z doświadczeniem w księgowości, R2R, controllingu i usprawnianiu procesów finansowych. Ważne są dla mnie zarówno poprawne liczby, jak i ich praktyczna interpretacja.': 'I am a financial controller with experience in accounting, R2R, controlling and finance process improvement. Accurate numbers matter to me, but so does their practical interpretation.',
    'Automatyzacja codziennej pracy finansów': 'Automation of day-to-day finance work',
    'Pracuję z Excel, VBA, Power Query i SQL, aby skracać cykliczne raportowanie, porządkować dane i zmniejszać ryzyko błędów w plikach.': 'I work with Excel, VBA, Power Query and SQL to shorten recurring reporting, organize data and reduce file error risk.',
    'Business partnering i komunikacja': 'Business partnering and communication',
    'Raport traktuję jako narzędzie do decyzji. Dlatego zależy mi na jasnym opisie wyniku, odpowiedzialności za proces i komunikacji z managerami oraz właścicielami firm.': 'I treat a report as a decision-making tool. That is why I focus on clear performance commentary, process ownership and communication with managers and business owners.',
    'Modele współpracy': 'Engagement models',
    'Elastyczne wsparcie dla finansów, controllingu i raportowania.': 'Flexible support for finance, controlling and reporting.',
    'Mogę wesprzeć firmę jednorazowo przy konkretnym projekcie albo cyklicznie jako zewnętrzne wsparcie controllingu, raportowania lub automatyzacji.': 'I can support a company once on a specific project or on a recurring basis as external support for controlling, reporting or automation.',
    'Projekt': 'Project',
    'Audyt raportu lub procesu': 'Report or process audit',
    'Przegląd obecnych plików, logiki, źródeł danych i rekomendacje, co można uprościć, skontrolować lub zautomatyzować.': 'Review of current files, logic and data sources with recommendations on what can be simplified, controlled or automated.',
    'Import danych, czyszczenie, transformacja, walidacje, raport końcowy i instrukcja użytkowania.': 'Data import, cleaning, transformation, validations, final report and user instructions.',
    'Dashboard / raport zarządczy': 'Dashboard / management report',
    'Model danych, KPI, widoki dla zarządu, raporty sprzedaży, kosztów, marży, cash flow i odchyleń.': 'Data model, KPIs, management views and reports for sales, costs, margin, cash flow and variances.',
    'Cyklicznie': 'Recurring',
    'Controlling na godziny': 'Hourly controlling support',
    'Regularna pomoc przy raportowaniu, analizach, zamknięciu miesiąca, KPI, budżetowaniu, forecastach i rozwoju narzędzi.': 'Regular support with reporting, analysis, month-end close, KPIs, budgeting, forecasts and tool development.',
    'Lokalnie i zdalnie': 'Local and remote',
    'Wsparcie finansowe i automatyzacja raportowania dla firm pracujących lokalnie lub zdalnie.': 'Finance support and reporting automation for companies working locally or remotely.',
    'Pracuję zdalnie oraz lokalnie. Przy projektach finansowych najważniejsze są dobry dostęp do danych, jasny cel raportowania i sprawna komunikacja, dlatego większość prac można prowadzić bez stałej obecności na miejscu.': 'I work remotely and locally. In finance projects, good data access, a clear reporting objective and efficient communication matter most, so most work can be done without constant on-site presence.',
    'Start od diagnozy': 'Start with diagnosis',
    'Na początku ustalamy, jaki raport, plik lub proces blokuje zespół i jaka decyzja ma być wspierana przez dane.': 'At the beginning, we define which report, file or process blocks the team and what decision should be supported by the data.',
    'Zdalna realizacja': 'Remote delivery',
    'Raportowanie, dashboardy, Excel, Power Query, VBA i konsultacje procesowe mogą być prowadzone w pełni zdalnie.': 'Reporting, dashboards, Excel, Power Query, VBA and process consultations can be delivered fully remotely.',
    'Spotkanie, gdy ma sens': 'Meeting when it makes sense',
    'Jeśli projekt wymaga warsztatu, omówienia procesu lub pracy z zespołem, możemy zaplanować spotkanie lokalne.': 'If the project requires a workshop, process discussion or team work, we can schedule a local meeting.',
    'FAQ': 'FAQ',
    'Najczęstsze pytania o współpracę.': 'Frequently asked questions about cooperation.',
    'Czy oferuję controlling na godziny?': 'Do I offer hourly controlling support?',
    'Tak. Mogę wesprzeć firmę projektowo, godzinowo lub cyklicznie w raportowaniu zarządczym, analizie kosztów, budżetowaniu, forecastach i automatyzacji finansów.': 'Yes. I can support a company on a project, hourly or recurring basis in management reporting, cost analysis, budgeting, forecasting and finance automation.',
    'Czy mogę zacząć od audytu obecnego raportu?': 'Can I start with an audit of the current report?',
    'Tak. Najpierw mogę przejrzeć obecny plik, źródła danych, ręczne kroki, ryzyka błędów i zaproponować prostszy sposób pracy.': 'Yes. I can first review the current file, data sources, manual steps and error risks, then propose a simpler way of working.',
    'Czy mogę uporządkować istniejący plik Excel?': 'Can I organize an existing Excel file?',
    'Tak. Mogę przeanalizować obecną logikę, źródła danych, ryzyka błędów, a następnie zaproponować przebudowę, automatyzację lub dokumentację.': 'Yes. I can analyze the current logic, data sources and error risks, then propose redesign, automation or documentation.',
    'Czy tworzę dashboardy i raporty KPI?': 'Do I create dashboards and KPI reports?',
    'Tak. Buduję modele danych, dashboardy i raporty dla finansów, sprzedaży, kosztów, marży, cash flow oraz raportowania zarządczego.': 'Yes. I build data models, dashboards and reports for finance, sales, costs, margin, cash flow and management reporting.',
    'Porozmawiajmy o roli, raporcie albo automatyzacji.': 'Let’s talk about a role, report or automation.',
    'Wyślij krótki opis obecnego procesu, pliku lub potrzeby rekrutacyjnej. Odpowiem, czy widzę przestrzeń do współpracy, automatyzacji, uproszczenia lub lepszego raportowania.': 'Send a short description of the current process, file or recruitment need. I will respond whether I see room for cooperation, automation, simplification or better reporting.',
    'Napisz maila': 'Send an email',
    'LinkedIn': 'LinkedIn',
    'Email:': 'Email:',
    'Telefon:': 'Phone:',
    'Lokalizacja:': 'Location:',
    'Polska / zdalnie': 'Poland / remote',
    'Imię i nazwisko': 'Full name',
    'Email': 'Email',
    'Typ kontaktu': 'Contact type',
    'Wybierz temat': 'Choose a topic',
    'Rekrutacja / CV': 'Recruitment / CV',
    'Projekt freelance': 'Freelance project',
    'Audyt raportu lub pliku': 'Report or file audit',
    'Dashboard / Excel / automatyzacja': 'Dashboard / Excel / automation',
    'Wiadomość': 'Message',
    'Wyślij opis': 'Send description',
    'Nie potrzebuję gotowej specyfikacji. Wystarczy krótki opis problemu albo celu.': 'You do not need a ready specification. A short description of the problem or goal is enough.',
    '© 2026 Filip Łodyga. Kontroler finansowy, controlling i automatyzacja raportowania.': '© 2026 Filip Łodyga. Financial controller, controlling and reporting automation.',
    'Polska · Współpraca zdalna': 'Poland · Remote cooperation'
  }
};

const attrTranslations = {
  en: {
    'Strona główna Filip Łodyga': 'Filip Łodyga homepage',
    'Główne menu': 'Main menu',
    'Wybór języka': 'Language selection',
    'Polska wersja językowa': 'Polish language version',
    'Specjalizacje': 'Specializations',
    'Dashboard finansowy KPI do raportowania zarządczego i analizy danych': 'Financial KPI dashboard for management reporting and data analysis',
    'Framework pracy': 'Work framework',
    'Profil w liczbach': 'Profile in numbers',
    'Jan Kowalski': 'John Smith',
    'jan@firma.pl': 'john@company.com',
    'Opisz krótko rolę, raport, plik lub proces, który chcesz usprawnić.': 'Briefly describe the role, report, file or process you want to improve.'
  }
};

const languageMeta = {
  pl: {
    title: 'Kontroler finansowy Poznań | Controlling, Excel, raporty',
    description: 'Kontroler finansowy z Wielkopolski. Controlling, kontrolling, Excel, VBA, SQL, dashboardy, automatyzacja raportów i raporty zarządcze dla firm.',
    keywords: 'kontroler finansowy Poznań, controlling Poznań, kontrolling, controlling na godziny, raportowanie zarządcze, automatyzacja raportów Excel, dashboardy Excel, Excel VBA, SQL, analiza danych, Power Query, Grodzisk Wielkopolski, Wielkopolska',
    ogTitle: 'Filip Łodyga | Controlling, Excel i automatyzacja raportów',
    ogDescription: 'Kontroler finansowy: raporty zarządcze, dashboardy, Excel, VBA, SQL, analiza danych i automatyzacja raportów dla firm.'
  },
  en: {
    title: 'Financial Controller | Controlling, Excel, reports',
    description: 'Financial controller from Poland. Controlling, Excel, VBA, SQL, dashboards, report automation and management reporting for companies.',
    keywords: 'financial controller, controlling, hourly controlling, management reporting, Excel report automation, VBA, SQL, Power Query, dashboards, data analysis, freelance controller',
    ogTitle: 'Filip Łodyga | Controlling, Excel and report automation',
    ogDescription: 'Financial controller: management reports, dashboards, Excel, VBA, SQL, data analysis and report automation for companies.'
  }
};

const originalTextNodes = new WeakMap();
const originalAttrs = new WeakMap();
const translatableAttrs = ['placeholder', 'aria-label', 'alt', 'value'];

function eachTextNode(callback) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  let node = walker.nextNode();
  while (node) {
    callback(node);
    node = walker.nextNode();
  }
}

function setMetaContent(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', value);
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : 'pl';
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  eachTextNode(node => {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.textContent);
    const original = originalTextNodes.get(node);
    if (lang === 'pl') {
      node.textContent = original;
      return;
    }

    const trimmed = original.trim();
    const translated = textTranslations.en[trimmed];
    if (!translated) return;
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    node.textContent = `${leading}${translated}${trailing}`;
  });

  document.querySelectorAll('*').forEach(element => {
    translatableAttrs.forEach(attr => {
      if (!element.hasAttribute(attr)) return;
      if (!originalAttrs.has(element)) originalAttrs.set(element, {});
      const store = originalAttrs.get(element);
      if (!store[attr]) store[attr] = element.getAttribute(attr);
      const original = store[attr];
      element.setAttribute(attr, lang === 'en' ? (attrTranslations.en[original] || original) : original);
    });
  });

  const meta = languageMeta[lang];
  document.title = meta.title;
  setMetaContent('meta[name="description"]', meta.description);
  setMetaContent('meta[name="keywords"]', meta.keywords);
  setMetaContent('meta[property="og:title"]', meta.ogTitle);
  setMetaContent('meta[property="og:description"]', meta.ogDescription);
  setMetaContent('meta[name="twitter:title"]', meta.ogTitle);
  setMetaContent('meta[name="twitter:description"]', meta.ogDescription);

  const subject = document.querySelector('input[name="subject"]');
  if (subject) {
    subject.value = lang === 'en' ? 'New message from flodyga.pl' : 'Nowa wiadomość z flodyga.pl';
  }
}

document.querySelectorAll('.lang-btn').forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const submitButton = contactForm.querySelector('#submit-btn');
    const status = contactForm.querySelector('#form-status');
    const initialText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = currentLang === 'en' ? 'Sending...' : 'Wysyłanie...';
    status.className = 'form-status';
    status.textContent = '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || (currentLang === 'en' ? 'The form could not be sent.' : 'Nie udało się wysłać formularza.'));
      }

      status.textContent = currentLang === 'en' ? 'Message sent. I will get back to you soon.' : 'Wiadomość wysłana. Odezwę się wkrótce.';
      status.className = 'form-status success';
      contactForm.reset();
    } catch (error) {
      status.textContent = currentLang === 'en'
        ? 'The message could not be sent. Please write directly to filiplodyga@gmail.com.'
        : 'Nie udało się wysłać wiadomości. Napisz bezpośrednio na filiplodyga@gmail.com.';
      status.className = 'form-status error';
      console.error('Web3Forms error:', error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = currentLang === 'en' ? 'Send description' : initialText;
    }
  });
}
