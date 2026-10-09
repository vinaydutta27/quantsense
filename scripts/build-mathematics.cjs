const fs=require('node:fs');
const sections=[];let section;
for(const line of fs.readFileSync('content/mathematics/lessons.txt','utf8').trim().split('\n')){
 if(line.startsWith('@ ')){section={title:line.slice(2),lessons:[]};sections.push(section);continue;}
 const fields=line.split('|');if(fields.length!==11)throw Error(fields[0]+' has '+fields.length+' fields');
 const [id,title,lab,story,reason,equation,example,experiment,question,answer,finance]=fields;
 section.lessons.push({id,title,lab,story,reason,equation,example,experiment,question,answer,finance});
}
const sources=[
 ['OpenStax · Algebra and Trigonometry','https://openstax.org/details/books/algebra-and-trigonometry-2e'],
 ['OpenStax · Calculus Volume 1','https://openstax.org/books/calculus-volume-1/pages/1-introduction'],
 ['MIT OpenCourseWare · Linear Algebra','https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/'],
 ['Boyd and Vandenberghe · Convex Optimization','https://web.stanford.edu/~boyd/cvxbook/'],
 ['MIT OpenCourseWare · Introduction to Probability and Statistics','https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/'],
 ['MIT OpenCourseWare · Introduction to Probability and Statistics','https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/'],
 ['MIT OpenCourseWare · Mathematics with Applications in Finance','https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/'],
 ['Carnegie Mellon · Continuous Time Finance','https://www.math.cmu.edu/~gautam/c/2024-420/'],
 ['MIT OpenCourseWare · Probability and Random Variables','https://ocw.mit.edu/courses/18-440-probability-and-random-variables-spring-2014/']
];
const gloss=fs.readFileSync('content/mathematics/glossary.txt','utf8').trim().split('\n').map(l=>{const [term,definition]=l.split('|');return{term,definition};});
sections.forEach((s,i)=>s.source=sources[i]);
const specific={copula:['MathWorks · Correlated Samples Using Copulas','https://www.mathworks.com/help/stats/copulas-generate-correlated-samples.html'],pareto:['NIST · Probability Distributions','https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/probdist.htm'],kalman:['Kalman Filter · The Kalman Gain','https://kalmanfilter.net/kalmanGain.html'],kkt:sources[3],bootstrap:sources[4],fourier:['MIT OpenCourseWare · Fourier Analysis','https://ocw.mit.edu/courses/18-103-fourier-analysis-fall-2013/']};
sections.forEach(s=>s.lessons.forEach(l=>{if(specific[l.lab])l.source=specific[l.lab];}));
const data={sections,glossary:gloss,version:'2026-10-09'};
fs.writeFileSync('dist/mathematics-content.js','window.MATH_COURSE = '+JSON.stringify(data,null,2)+';\n');
const original=fs.readFileSync('dist/saccr.html','utf8');
const tracking=original.match(/<head>([\s\S]*?)<meta charset/)[1];
let paths=original.match(/<div class="path-switch"[\s\S]*?<\/div>/)[0].replace(/ aria-current="page"/g,'').replace(/<a href="mathematics.html">[\s\S]*?<\/a>/g,'');
paths=paths.replace(/(<div[^>]+>)/,'$1<a href="mathematics.html" aria-current="page">Mathematics for quantitative finance</a>');
const siteNav=original.match(/<nav class="site-links"[\s\S]*?<\/nav>/)[0];
const head=`<!doctype html><html lang="en"><head>${tracking}<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mathematics for Quantitative Finance | Quant$ense</title><meta name="description" content="Learn mathematics for quantitative finance from first principles through 84 visual lessons: algebra, calculus, linear algebra, probability, statistics, numerical methods and stochastic pricing."><link rel="canonical" href="https://quantsense.co/mathematics.html"><link rel="stylesheet" href="style.css"><link rel="stylesheet" href="mathematics.css"></head>`;
const sidebar=`<aside><a class="brand" href="./"><span class="mark">∿</span> Quant<span>$ense</span></a>${paths}<div class="math-progress"><span id="progress-label"></span><progress id="course-progress" max="84" value="0" aria-label="Lessons marked understood"></progress></div><label class="math-side-tools" for="lesson-search">Find a lesson</label><input class="math-search" id="lesson-search" type="search" placeholder="Search ideas or applications"><div class="math-side-tools" id="search-status" role="status"></div><nav id="math-nav" aria-label="Mathematics chapters and lessons"></nav><p class="math-side-tools" id="progress-note">Saved only on this browser. <button id="clear-progress" type="button">Clear progress</button></p></aside>`;
fs.writeFileSync('dist/mathematics.html',head+'<body class="stochastic math-course">'+sidebar+'<div class="shell"><header><span>MATHEMATICS · FOUNDATIONS</span><span class="header-tag">Understand why. Then calculate.</span></header>'+siteNav+fs.readFileSync('content/mathematics/page.html','utf8')+'</div><script src="module-menu.js"></script><script src="mathematics-content.js"></script><script src="mathematics-engine.js"></script><script src="mathematics.js"></script></body></html>');
console.log(sections.reduce((n,s)=>n+s.lessons.length,0)+' lessons; '+gloss.length+' definitions');
