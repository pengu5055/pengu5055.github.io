window.MathJax = {
    loader: {
        load: ['input/tex', 'input/mml']
      },
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)'], ['<math display="inline">', '</math>']],
        displayMath: [['$$', '$$'], ['\\[', '\\]'], ['<math display="block">', '</math>']],
        macros: {
            RR: "\\mathbb{R}",
            R: "\\mathbb{R}",
            C: "\\mathbb{C}",
            N: "\\mathbb{N}",
            T: "\\intercal",
            b: ["{\\bf #1}", 1]
        }
    },
    mml: {
        parseAs: 'html',                     // or 'xml'
        forceReparse: true,                 // true to serialize and re-parse all MathML
        parseError: function (node) {        // function to process parsing errors
          this.error(this.adaptor.textContent(node).replace(/\n.*/g, ''));
        }
      },
    svg: {
        fontCache: 'global'
    }
};