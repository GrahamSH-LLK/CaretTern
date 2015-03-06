ace.define("ace/mode/xquery/jsoniq_lexer",["require","exports","module"], function(require, exports, module) {
module.exports = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({
1:[function(_dereq_,module,exports){
                                                            var JSONiqTokenizer = exports.JSONiqTokenizer = function JSONiqTokenizer(string, parsingEventHandler)
                                                            {
                                                              init(string, parsingEventHandler);
  var self = this;

  this.ParseException = function(b, e, s, o, x)
  {
    var
      begin = b,
      end = e,
      state = s,
      offending = o,
      expected = x;

    this.getBegin = function() {return begin;};
    this.getEnd = function() {return end;};
    this.getState = function() {return state;};
    this.getExpected = function() {return expected;};
    this.getOffending = function() {return offending;};

    this.getMessage = function()
    {
      return offending < 0 ? "lexical analysis failed" : "syntax error";
    };
  };

  function init(string, parsingEventHandler)
  {
    eventHandler = parsingEventHandler;
    input = string;
    size = string.length;
    reset(0, 0, 0);
  }

  this.getInput = function()
  {
    return input;
  };

  function reset(l, b, e)
  {
            b0 = b; e0 = b;
    l1 = l; b1 = b; e1 = e;
    end = e;
    eventHandler.reset(input);
  }

  this.getOffendingToken = function(e)
  {
    var o = e.getOffending();
    return o >= 0 ? JSONiqTokenizer.TOKEN[o] : null;
  };

  this.getExpectedTokenSet = function(e)
  {
    var expected;
    if (e.getExpected() < 0)
    {
      expected = JSONiqTokenizer.getTokenSet(- e.getState());
    }
    else
    {
      expected = [JSONiqTokenizer.TOKEN[e.getExpected()]];
    }
    return expected;
  };

  this.getErrorMessage = function(e)
  {
    var tokenSet = this.getExpectedTokenSet(e);
    var found = this.getOffendingToken(e);
    var prefix = input.substring(0, e.getBegin());
    var lines = prefix.split("\n");
    var line = lines.length;
    var column = lines[line - 1].length + 1;
    var size = e.getEnd() - e.getBegin();
    return e.getMessage()
         + (found == null ? "" : ", found " + found)
         + "\nwhile expecting "
         + (tokenSet.length == 1 ? tokenSet[0] : ("[" + tokenSet.join(", ") + "]"))
         + "\n"
         + (size == 0 || found != null ? "" : "after successfully scanning " + size + " characters beginning ")
         + "at line " + line + ", column " + column + ":\n..."
         + input.substring(e.getBegin(), Math.min(input.length, e.getBegin() + 64))
         + "...";
  };

  this.parse_start = function()
  {
    eventHandler.startNonterminal("start", e0);
    lookahead1W(14);                // ModuleDecl | Annotation | OptionDecl | Operator | Variable | Tag | AttrTest |
    switch (l1)
    {
    case 58:                        // '<![CDATA['
      shift(58);                    // '<![CDATA['
      break;
    case 57:                        // '<!--'
      shift(57);                    // '<!--'
      break;
    case 59:                        // '<?'
      shift(59);                    // '<?'
      break;
    case 43:                        // '(#'
      shift(43);                    // '(#'
      break;
    case 45:                        // '(:~'
      shift(45);                    // '(:~'
      break;
    case 44:                        // '(:'
      shift(44);                    // '(:'
      break;
    case 37:                        // '"'
      shift(37);                    // '"'
      break;
    case 41:                        // "'"
      shift(41);                    // "'"
      break;
    case 277:                       // '}'
      shift(277);                   // '}'
      break;
    case 274:                       // '{'
      shift(274);                   // '{'
      break;
    case 42:                        // '('
      shift(42);                    // '('
      break;
    case 46:                        // ')'
      shift(46);                    // ')'
      break;
    case 52:                        // '/'
      shift(52);                    // '/'
      break;
    case 65:                        // '['
      shift(65);                    // '['
      break;
    case 66:                        // ']'
      shift(66);                    // ']'
      break;
    case 49:                        // ','
      shift(49);                    // ','
      break;
    case 51:                        // '.'
      shift(51);                    // '.'
      break;
    case 56:                        // ';'
      shift(56);                    // ';'
      break;
    case 54:                        // ':'
      shift(54);                    // ':'
      break;
    case 36:                        // '!'
      shift(36);                    // '!'
      break;
    case 276:                       // '|'
      shift(276);                   // '|'
      break;
    case 40:                        // '$$'
      shift(40);                    // '$$'
      break;
    case 5:                         // Annotation
      shift(5);                     // Annotation
      break;
    case 4:                         // ModuleDecl
      shift(4);                     // ModuleDecl
      break;
    case 6:                         // OptionDecl
      shift(6);                     // OptionDecl
      break;
    case 15:                        // AttrTest
      shift(15);                    // AttrTest
      break;
    case 16:                        // Wildcard
      shift(16);                    // Wildcard
      break;
    case 18:                        // IntegerLiteral
      shift(18);                    // IntegerLiteral
      break;
    case 19:                        // DecimalLiteral
      shift(19);                    // DecimalLiteral
      break;
    case 20:                        // DoubleLiteral
      shift(20);                    // DoubleLiteral
      break;
    case 8:                         // Variable
      shift(8);                     // Variable
      break;
    case 9:                         // Tag
      shift(9);                     // Tag
      break;
    case 7:                         // Operator
      shift(7);                     // Operator
      break;
    case 35:                        // EOF
      shift(35);                    // EOF
      break;
    default:
      parse_EQName();
    }
    eventHandler.endNonterminal("start", e0);
  };

  this.parse_StartTag = function()
  {
    eventHandler.startNonterminal("StartTag", e0);
    lookahead1W(8);                 // QName | S^WS | EOF | '"' | "'" | '/>' | '=' | '>'
    switch (l1)
    {
    case 61:                        // '>'
      shift(61);                    // '>'
      break;
    case 53:                        // '/>'
      shift(53);                    // '/>'
      break;
    case 29:                        // QName
      shift(29);                    // QName
      break;
    case 60:                        // '='
      shift(60);                    // '='
      break;
    case 37:                        // '"'
      shift(37);                    // '"'
      break;
    case 41:                        // "'"
      shift(41);                    // "'"
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("StartTag", e0);
  };

  this.parse_TagContent = function()
  {
    eventHandler.startNonterminal("TagContent", e0);
    lookahead1(11);                 // Tag | EndTag | PredefinedEntityRef | ElementContentChar | CharRef | EOF |
    switch (l1)
    {
    case 25:                        // ElementContentChar
      shift(25);                    // ElementContentChar
      break;
    case 9:                         // Tag
      shift(9);                     // Tag
      break;
    case 10:                        // EndTag
      shift(10);                    // EndTag
      break;
    case 58:                        // '<![CDATA['
      shift(58);                    // '<![CDATA['
      break;
    case 57:                        // '<!--'
      shift(57);                    // '<!--'
      break;
    case 21:                        // PredefinedEntityRef
      shift(21);                    // PredefinedEntityRef
      break;
    case 31:                        // CharRef
      shift(31);                    // CharRef
      break;
    case 275:                       // '{{'
      shift(275);                   // '{{'
      break;
    case 278:                       // '}}'
      shift(278);                   // '}}'
      break;
    case 274:                       // '{'
      shift(274);                   // '{'
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("TagContent", e0);
  };

  this.parse_AposAttr = function()
  {
    eventHandler.startNonterminal("AposAttr", e0);
    lookahead1(10);                 // PredefinedEntityRef | EscapeApos | AposAttrContentChar | CharRef | EOF | "'" |
    switch (l1)
    {
    case 23:                        // EscapeApos
      shift(23);                    // EscapeApos
      break;
    case 27:                        // AposAttrContentChar
      shift(27);                    // AposAttrContentChar
      break;
    case 21:                        // PredefinedEntityRef
      shift(21);                    // PredefinedEntityRef
      break;
    case 31:                        // CharRef
      shift(31);                    // CharRef
      break;
    case 275:                       // '{{'
      shift(275);                   // '{{'
      break;
    case 278:                       // '}}'
      shift(278);                   // '}}'
      break;
    case 274:                       // '{'
      shift(274);                   // '{'
      break;
    case 41:                        // "'"
      shift(41);                    // "'"
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("AposAttr", e0);
  };

  this.parse_QuotAttr = function()
  {
    eventHandler.startNonterminal("QuotAttr", e0);
    lookahead1(9);                  // PredefinedEntityRef | EscapeQuot | QuotAttrContentChar | CharRef | EOF | '"' |
    switch (l1)
    {
    case 22:                        // EscapeQuot
      shift(22);                    // EscapeQuot
      break;
    case 26:                        // QuotAttrContentChar
      shift(26);                    // QuotAttrContentChar
      break;
    case 21:                        // PredefinedEntityRef
      shift(21);                    // PredefinedEntityRef
      break;
    case 31:                        // CharRef
      shift(31);                    // CharRef
      break;
    case 275:                       // '{{'
      shift(275);                   // '{{'
      break;
    case 278:                       // '}}'
      shift(278);                   // '}}'
      break;
    case 274:                       // '{'
      shift(274);                   // '{'
      break;
    case 37:                        // '"'
      shift(37);                    // '"'
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("QuotAttr", e0);
  };

  this.parse_CData = function()
  {
    eventHandler.startNonterminal("CData", e0);
    lookahead1(1);                  // CDataSectionContents | EOF | ']]>'
    switch (l1)
    {
    case 14:                        // CDataSectionContents
      shift(14);                    // CDataSectionContents
      break;
    case 67:                        // ']]>'
      shift(67);                    // ']]>'
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("CData", e0);
  };

  this.parse_XMLComment = function()
  {
    eventHandler.startNonterminal("XMLComment", e0);
    lookahead1(0);                  // DirCommentContents | EOF | '-->'
    switch (l1)
    {
    case 12:                        // DirCommentContents
      shift(12);                    // DirCommentContents
      break;
    case 50:                        // '-->'
      shift(50);                    // '-->'
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("XMLComment", e0);
  };

  this.parse_PI = function()
  {
    eventHandler.startNonterminal("PI", e0);
    lookahead1(3);                  // DirPIContents | EOF | '?' | '?>'
    switch (l1)
    {
    case 13:                        // DirPIContents
      shift(13);                    // DirPIContents
      break;
    case 62:                        // '?'
      shift(62);                    // '?'
      break;
    case 63:                        // '?>'
      shift(63);                    // '?>'
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("PI", e0);
  };

  this.parse_Pragma = function()
  {
    eventHandler.startNonterminal("Pragma", e0);
    lookahead1(2);                  // PragmaContents | EOF | '#' | '#)'
    switch (l1)
    {
    case 11:                        // PragmaContents
      shift(11);                    // PragmaContents
      break;
    case 38:                        // '#'
      shift(38);                    // '#'
      break;
    case 39:                        // '#)'
      shift(39);                    // '#)'
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("Pragma", e0);
  };

  this.parse_Comment = function()
  {
    eventHandler.startNonterminal("Comment", e0);
    lookahead1(4);                  // CommentContents | EOF | '(:' | ':)'
    switch (l1)
    {
    case 55:                        // ':)'
      shift(55);                    // ':)'
      break;
    case 44:                        // '(:'
      shift(44);                    // '(:'
      break;
    case 32:                        // CommentContents
      shift(32);                    // CommentContents
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("Comment", e0);
  };

  this.parse_CommentDoc = function()
  {
    eventHandler.startNonterminal("CommentDoc", e0);
    lookahead1(6);                  // DocTag | DocCommentContents | EOF | '(:' | ':)'
    switch (l1)
    {
    case 33:                        // DocTag
      shift(33);                    // DocTag
      break;
    case 34:                        // DocCommentContents
      shift(34);                    // DocCommentContents
      break;
    case 55:                        // ':)'
      shift(55);                    // ':)'
      break;
    case 44:                        // '(:'
      shift(44);                    // '(:'
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("CommentDoc", e0);
  };

  this.parse_QuotString = function()
  {
    eventHandler.startNonterminal("QuotString", e0);
    lookahead1(5);                  // JSONChar | JSONCharRef | JSONPredefinedCharRef | EOF | '"'
    switch (l1)
    {
    case 3:                         // JSONPredefinedCharRef
      shift(3);                     // JSONPredefinedCharRef
      break;
    case 2:                         // JSONCharRef
      shift(2);                     // JSONCharRef
      break;
    case 1:                         // JSONChar
      shift(1);                     // JSONChar
      break;
    case 37:                        // '"'
      shift(37);                    // '"'
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("QuotString", e0);
  };

  this.parse_AposString = function()
  {
    eventHandler.startNonterminal("AposString", e0);
    lookahead1(7);                  // PredefinedEntityRef | EscapeApos | AposChar | CharRef | EOF | "'"
    switch (l1)
    {
    case 21:                        // PredefinedEntityRef
      shift(21);                    // PredefinedEntityRef
      break;
    case 31:                        // CharRef
      shift(31);                    // CharRef
      break;
    case 23:                        // EscapeApos
      shift(23);                    // EscapeApos
      break;
    case 24:                        // AposChar
      shift(24);                    // AposChar
      break;
    case 41:                        // "'"
      shift(41);                    // "'"
      break;
    default:
      shift(35);                    // EOF
    }
    eventHandler.endNonterminal("AposString", e0);
  };

  this.parse_Prefix = function()
  {
    eventHandler.startNonterminal("Prefix", e0);
    lookahead1W(13);                // NCName^Token | S^WS | 'after' | 'allowing' | 'ancestor' | 'ancestor-or-self' |
    whitespace();
    parse_NCName();
    eventHandler.endNonterminal("Prefix", e0);
  };

  this.parse__EQName = function()
  {
    eventHandler.startNonterminal("_EQName", e0);
    lookahead1W(12);                // EQName^Token | S^WS | 'after' | 'allowing' | 'ancestor' | 'ancestor-or-self' |
    whitespace();
    parse_EQName();
    eventHandler.endNonterminal("_EQName", e0);
  };

  function parse_EQName()
  {
    eventHandler.startNonterminal("EQName", e0);
    switch (l1)
    {
    case 80:                        // 'attribute'
      shift(80);                    // 'attribute'
      break;
    case 94:                        // 'comment'
      shift(94);                    // 'comment'
      break;
    case 118:                       // 'document-node'
      shift(118);                   // 'document-node'
      break;
    case 119:                       // 'element'
      shift(119);                   // 'element'
      break;
    case 122:                       // 'empty-sequence'
      shift(122);                   // 'empty-sequence'
      break;
    case 143:                       // 'function'
      shift(143);                   // 'function'
      break;
    case 150:                       // 'if'
      shift(150);                   // 'if'
      break;
    case 163:                       // 'item'
      shift(163);                   // 'item'
      break;
    case 183:                       // 'namespace-node'
      shift(183);                   // 'namespace-node'
      break;
    case 189:                       // 'node'
      shift(189);                   // 'node'
      break;
    case 214:                       // 'processing-instruction'
      shift(214);                   // 'processing-instruction'
      break;
    case 224:                       // 'schema-attribute'
      shift(224);                   // 'schema-attribute'
      break;
    case 225:                       // 'schema-element'
      shift(225);                   // 'schema-element'
      break;
    case 241:                       // 'switch'
      shift(241);                   // 'switch'
      break;
    case 242:                       // 'text'
      shift(242);                   // 'text'
      break;
    case 251:                       // 'typeswitch'
      shift(251);                   // 'typeswitch'
      break;
    default:
      parse_FunctionName();
    }
    eventHandler.endNonterminal("EQName", e0);
  }

  function parse_FunctionName()
  {
    eventHandler.startNonterminal("FunctionName", e0);
    switch (l1)
    {
    case 17:                        // EQName^Token
      shift(17);                    // EQName^Token
      break;
    case 68:                        // 'after'
      shift(68);                    // 'after'
      break;
    case 71:                        // 'ancestor'
      shift(71);                    // 'ancestor'
      break;
    case 72:                        // 'ancestor-or-self'
      shift(72);                    // 'ancestor-or-self'
      break;
    case 73:                        // 'and'
      shift(73);                    // 'and'
      break;
    case 77:                        // 'as'
      shift(77);                    // 'as'
      break;
    case 78:                        // 'ascending'
      shift(78);                    // 'ascending'
      break;
    case 82:                        // 'before'
      shift(82);                    // 'before'
      break;
    case 86:                        // 'case'
      shift(86);                    // 'case'
      break;
    case 87:                        // 'cast'
      shift(87);                    // 'cast'
      break;
    case 88:                        // 'castable'
      shift(88);                    // 'castable'
      break;
    case 91:                        // 'child'
      shift(91);                    // 'child'
      break;
    case 92:                        // 'collation'
      shift(92);                    // 'collation'
      break;
    case 101:                       // 'copy'
      shift(101);                   // 'copy'
      break;
    case 103:                       // 'count'
      shift(103);                   // 'count'
      break;
    case 106:                       // 'declare'
      shift(106);                   // 'declare'
      break;
    case 107:                       // 'default'
      shift(107);                   // 'default'
      break;
    case 108:                       // 'delete'
      shift(108);                   // 'delete'
      break;
    case 109:                       // 'descendant'
      shift(109);                   // 'descendant'
      break;
    case 110:                       // 'descendant-or-self'
      shift(110);                   // 'descendant-or-self'
      break;
    case 111:                       // 'descending'
      shift(111);                   // 'descending'
      break;
    case 116:                       // 'div'
      shift(116);                   // 'div'
      break;
    case 117:                       // 'document'
      shift(117);                   // 'document'
      break;
    case 120:                       // 'else'
      shift(120);                   // 'else'
      break;
    case 121:                       // 'empty'
      shift(121);                   // 'empty'
      break;
    case 124:                       // 'end'
      shift(124);                   // 'end'
      break;
    case 126:                       // 'eq'
      shift(126);                   // 'eq'
      break;
    case 127:                       // 'every'
      shift(127);                   // 'every'
      break;
    case 129:                       // 'except'
      shift(129);                   // 'except'
      break;
    case 132:                       // 'first'
      shift(132);                   // 'first'
      break;
    case 133:                       // 'following'
      shift(133);                   // 'following'
      break;
    case 134:                       // 'following-sibling'
      shift(134);                   // 'following-sibling'
      break;
    case 135:                       // 'for'
      shift(135);                   // 'for'
      break;
    case 144:                       // 'ge'
      shift(144);                   // 'ge'
      break;
    case 146:                       // 'group'
      shift(146);                   // 'group'
      break;
    case 148:                       // 'gt'
      shift(148);                   // 'gt'
      break;
    case 149:                       // 'idiv'
      shift(149);                   // 'idiv'
      break;
    case 151:                       // 'import'
      shift(151);                   // 'import'
      break;
    case 157:                       // 'insert'
      shift(157);                   // 'insert'
      break;
    case 158:                       // 'instance'
      shift(158);                   // 'instance'
      break;
    case 160:                       // 'intersect'
      shift(160);                   // 'intersect'
      break;
    case 161:                       // 'into'
      shift(161);                   // 'into'
      break;
    case 162:                       // 'is'
      shift(162);                   // 'is'
      break;
    case 168:                       // 'last'
      shift(168);                   // 'last'
      break;
    case 170:                       // 'le'
      shift(170);                   // 'le'
      break;
    case 172:                       // 'let'
      shift(172);                   // 'let'
      break;
    case 176:                       // 'lt'
      shift(176);                   // 'lt'
      break;
    case 178:                       // 'mod'
      shift(178);                   // 'mod'
      break;
    case 179:                       // 'modify'
      shift(179);                   // 'modify'
      break;
    case 180:                       // 'module'
      shift(180);                   // 'module'
      break;
    case 182:                       // 'namespace'
      shift(182);                   // 'namespace'
      break;
    case 184:                       // 'ne'
      shift(184);                   // 'ne'
      break;
    case 196:                       // 'only'
      shift(196);                   // 'only'
      break;
    case 198:                       // 'or'
      shift(198);                   // 'or'
      break;
    case 199:                       // 'order'
      shift(199);                   // 'order'
      break;
    case 200:                       // 'ordered'
      shift(200);                   // 'ordered'
      break;
    case 204:                       // 'parent'
      shift(204);                   // 'parent'
      break;
    case 210:                       // 'preceding'
      shift(210);                   // 'preceding'
      break;
    case 211:                       // 'preceding-sibling'
      shift(211);                   // 'preceding-sibling'
      break;
    case 216:                       // 'rename'
      shift(216);                   // 'rename'
      break;
    case 217:                       // 'replace'
      shift(217);                   // 'replace'
      break;
    case 218:                       // 'return'
      shift(218);                   // 'return'
      break;
    case 222:                       // 'satisfies'
      shift(222);                   // 'satisfies'
      break;
    case 227:                       // 'self'
      shift(227);                   // 'self'
      break;
    case 233:                       // 'some'
      shift(233);                   // 'some'
      break;
    case 234:                       // 'stable'
      shift(234);                   // 'stable'
      break;
    case 235:                       // 'start'
      shift(235);                   // 'start'
      break;
    case 246:                       // 'to'
      shift(246);                   // 'to'
      break;
    case 247:                       // 'treat'
      shift(247);                   // 'treat'
      break;
    case 248:                       // 'try'
      shift(248);                   // 'try'
      break;
    case 252:                       // 'union'
      shift(252);                   // 'union'
      break;
    case 254:                       // 'unordered'
      shift(254);                   // 'unordered'
      break;
    case 258:                       // 'validate'
      shift(258);                   // 'validate'
      break;
    case 264:                       // 'where'
      shift(264);                   // 'where'
      break;
    case 268:                       // 'with'
      shift(268);                   // 'with'
      break;
    case 272:                       // 'xquery'
      shift(272);                   // 'xquery'
      break;
    case 70:                        // 'allowing'
      shift(70);                    // 'allowing'
      break;
    case 79:                        // 'at'
      shift(79);                    // 'at'
      break;
    case 81:                        // 'base-uri'
      shift(81);                    // 'base-uri'
      break;
    case 83:                        // 'boundary-space'
      shift(83);                    // 'boundary-space'
      break;
    case 84:                        // 'break'
      shift(84);                    // 'break'
      break;
    case 89:                        // 'catch'
      shift(89);                    // 'catch'
      break;
    case 96:                        // 'construction'
      shift(96);                    // 'construction'
      break;
    case 99:                        // 'context'
      shift(99);                    // 'context'
      break;
    case 100:                       // 'continue'
      shift(100);                   // 'continue'
      break;
    case 102:                       // 'copy-namespaces'
      shift(102);                   // 'copy-namespaces'
      break;
    case 104:                       // 'decimal-format'
      shift(104);                   // 'decimal-format'
      break;
    case 123:                       // 'encoding'
      shift(123);                   // 'encoding'
      break;
    case 130:                       // 'exit'
      shift(130);                   // 'exit'
      break;
    case 131:                       // 'external'
      shift(131);                   // 'external'
      break;
    case 139:                       // 'ft-option'
      shift(139);                   // 'ft-option'
      break;
    case 152:                       // 'in'
      shift(152);                   // 'in'
      break;
    case 153:                       // 'index'
      shift(153);                   // 'index'
      break;
    case 159:                       // 'integrity'
      shift(159);                   // 'integrity'
      break;
    case 169:                       // 'lax'
      shift(169);                   // 'lax'
      break;
    case 190:                       // 'nodes'
      shift(190);                   // 'nodes'
      break;
    case 197:                       // 'option'
      shift(197);                   // 'option'
      break;
    case 201:                       // 'ordering'
      shift(201);                   // 'ordering'
      break;
    case 220:                       // 'revalidation'
      shift(220);                   // 'revalidation'
      break;
    case 223:                       // 'schema'
      shift(223);                   // 'schema'
      break;
    case 226:                       // 'score'
      shift(226);                   // 'score'
      break;
    case 232:                       // 'sliding'
      shift(232);                   // 'sliding'
      break;
    case 238:                       // 'strict'
      shift(238);                   // 'strict'
      break;
    case 249:                       // 'tumbling'
      shift(249);                   // 'tumbling'
      break;
    case 250:                       // 'type'
      shift(250);                   // 'type'
      break;
    case 255:                       // 'updating'
      shift(255);                   // 'updating'
      break;
    case 259:                       // 'value'
      shift(259);                   // 'value'
      break;
    case 260:                       // 'variable'
      shift(260);                   // 'variable'
      break;
    case 261:                       // 'version'
      shift(261);                   // 'version'
      break;
    case 265:                       // 'while'
      shift(265);                   // 'while'
      break;
    case 95:                        // 'constraint'
      shift(95);                    // 'constraint'
      break;
    case 174:                       // 'loop'
      shift(174);                   // 'loop'
      break;
    default:
      shift(219);                   // 'returning'
    }
    eventHandler.endNonterminal("FunctionName", e0);
  }

  function parse_NCName()
  {
    eventHandler.startNonterminal("NCName", e0);
    switch (l1)
    {
    case 28:                        // NCName^Token
      shift(28);                    // NCName^Token
      break;
    case 68:                        // 'after'
      shift(68);                    // 'after'
      break;
    case 73:                        // 'and'
      shift(73);                    // 'and'
      break;
    case 77:                        // 'as'
      shift(77);                    // 'as'
      break;
    case 78:                        // 'ascending'
      shift(78);                    // 'ascending'
      break;
    case 82:                        // 'before'
      shift(82);                    // 'before'
      break;
    case 86:                        // 'case'
      shift(86);                    // 'case'
      break;
    case 87:                        // 'cast'
      shift(87);                    // 'cast'
      break;
    case 88:                        // 'castable'
      shift(88);                    // 'castable'
      break;
    case 92:                        // 'collation'
      shift(92);                    // 'collation'
      break;
    case 103:                       // 'count'
      shift(103);                   // 'count'
      break;
    case 107:                       // 'default'
      shift(107);                   // 'default'
      break;
    case 111:                       // 'descending'
      shift(111);                   // 'descending'
      break;
    case 116:                       // 'div'
      shift(116);                   // 'div'
      break;
    case 120:                       // 'else'
      shift(120);                   // 'else'
      break;
    case 121:                       // 'empty'
      shift(121);                   // 'empty'
      break;
    case 124:                       // 'end'
      shift(124);                   // 'end'
      break;
    case 126:                       // 'eq'
      shift(126);                   // 'eq'
      break;
    case 129:                       // 'except'
      shift(129);                   // 'except'
      break;
    case 135:                       // 'for'
      shift(135);                   // 'for'
      break;
    case 144:                       // 'ge'
      shift(144);                   // 'ge'
      break;
    case 146:                       // 'group'
      shift(146);                   // 'group'
      break;
    case 148:                       // 'gt'
      shift(148);                   // 'gt'
      break;
    case 149:                       // 'idiv'
      shift(149);                   // 'idiv'
      break;
    case 158:                       // 'instance'
      shift(158);                   // 'instance'
      break;
    case 160:                       // 'intersect'
      shift(160);                   // 'intersect'
      break;
    case 161:                       // 'into'
      shift(161);                   // 'into'
      break;
    case 162:                       // 'is'
      shift(162);                   // 'is'
      break;
    case 170:                       // 'le'
      shift(170);                   // 'le'
      break;
    case 172:                       // 'let'
      shift(172);                   // 'let'
      break;
    case 176:                       // 'lt'
      shift(176);                   // 'lt'
      break;
    case 178:                       // 'mod'
      shift(178);                   // 'mod'
      break;
    case 179:                       // 'modify'
      shift(179);                   // 'modify'
      break;
    case 184:                       // 'ne'
      shift(184);                   // 'ne'
      break;
    case 196:                       // 'only'
      shift(196);                   // 'only'
      break;
    case 198:                       // 'or'
      shift(198);                   // 'or'
      break;
    case 199:                       // 'order'
      shift(199);                   // 'order'
      break;
    case 218:                       // 'return'
      shift(218);                   // 'return'
      break;
    case 222:                       // 'satisfies'
      shift(222);                   // 'satisfies'
      break;
    case 234:                       // 'stable'
      shift(234);                   // 'stable'
      break;
    case 235:                       // 'start'
      shift(235);                   // 'start'
      break;
    case 246:                       // 'to'
      shift(246);                   // 'to'
      break;
    case 247:                       // 'treat'
      shift(247);                   // 'treat'
      break;
    case 252:                       // 'union'
      shift(252);                   // 'union'
      break;
    case 264:                       // 'where'
      shift(264);                   // 'where'
      break;
    case 268:                       // 'with'
      shift(268);                   // 'with'
      break;
    case 71:                        // 'ancestor'
      shift(71);                    // 'ancestor'
      break;
    case 72:                        // 'ancestor-or-self'
      shift(72);                    // 'ancestor-or-self'
      break;
    case 80:                        // 'attribute'
      shift(80);                    // 'attribute'
      break;
    case 91:                        // 'child'
      shift(91);                    // 'child'
      break;
    case 94:                        // 'comment'
      shift(94);                    // 'comment'
      break;
    case 101:                       // 'copy'
      shift(101);                   // 'copy'
      break;
    case 106:                       // 'declare'
      shift(106);                   // 'declare'
      break;
    case 108:                       // 'delete'
      shift(108);                   // 'delete'
      break;
    case 109:                       // 'descendant'
      shift(109);                   // 'descendant'
      break;
    case 110:                       // 'descendant-or-self'
      shift(110);                   // 'descendant-or-self'
      break;
    case 117:                       // 'document'
      shift(117);                   // 'document'
      break;
    case 118:                       // 'document-node'
      shift(118);                   // 'document-node'
      break;
    case 119:                       // 'element'
      shift(119);                   // 'element'
      break;
    case 122:                       // 'empty-sequence'
      shift(122);                   // 'empty-sequence'
      break;
    case 127:                       // 'every'
      shift(127);                   // 'every'
      break;
    case 132:                       // 'first'
      shift(132);                   // 'first'
      break;
    case 133:                       // 'following'
      shift(133);                   // 'following'
      break;
    case 134:                       // 'following-sibling'
      shift(134);                   // 'following-sibling'
      break;
    case 143:                       // 'function'
      shift(143);                   // 'function'
      break;
    case 150:                       // 'if'
      shift(150);                   // 'if'
      break;
    case 151:                       // 'import'
      shift(151);                   // 'import'
      break;
    case 157:                       // 'insert'
      shift(157);                   // 'insert'
      break;
    case 163:                       // 'item'
      shift(163);                   // 'item'
      break;
    case 168:                       // 'last'
      shift(168);                   // 'last'
      break;
    case 180:                       // 'module'
      shift(180);                   // 'module'
      break;
    case 182:                       // 'namespace'
      shift(182);                   // 'namespace'
      break;
    case 183:                       // 'namespace-node'
      shift(183);                   // 'namespace-node'
      break;
    case 189:                       // 'node'
      shift(189);                   // 'node'
      break;
    case 200:                       // 'ordered'
      shift(200);                   // 'ordered'
      break;
    case 204:                       // 'parent'
      shift(204);                   // 'parent'
      break;
    case 210:                       // 'preceding'
      shift(210);                   // 'preceding'
      break;
    case 211:                       // 'preceding-sibling'
      shift(211);                   // 'preceding-sibling'
      break;
    case 214:                       // 'processing-instruction'
      shift(214);                   // 'processing-instruction'
      break;
    case 216:                       // 'rename'
      shift(216);                   // 'rename'
      break;
    case 217:                       // 'replace'
      shift(217);                   // 'replace'
      break;
    case 224:                       // 'schema-attribute'
      shift(224);                   // 'schema-attribute'
      break;
    case 225:                       // 'schema-element'
      shift(225);                   // 'schema-element'
      break;
    case 227:                       // 'self'
      shift(227);                   // 'self'
      break;
    case 233:                       // 'some'
      shift(233);                   // 'some'
      break;
    case 241:                       // 'switch'
      shift(241);                   // 'switch'
      break;
    case 242:                       // 'text'
      shift(242);                   // 'text'
      break;
    case 248:                       // 'try'
      shift(248);                   // 'try'
      break;
    case 251:                       // 'typeswitch'
      shift(251);                   // 'typeswitch'
      break;
    case 254:                       // 'unordered'
      shift(254);                   // 'unordered'
      break;
    case 258:                       // 'validate'
      shift(258);                   // 'validate'
      break;
    case 260:                       // 'variable'
      shift(260);                   // 'variable'
      break;
    case 272:                       // 'xquery'
      shift(272);                   // 'xquery'
      break;
    case 70:                        // 'allowing'
      shift(70);                    // 'allowing'
      break;
    case 79:                        // 'at'
      shift(79);                    // 'at'
      break;
    case 81:                        // 'base-uri'
      shift(81);                    // 'base-uri'
      break;
    case 83:                        // 'boundary-space'
      shift(83);                    // 'boundary-space'
      break;
    case 84:                        // 'break'
      shift(84);                    // 'break'
      break;
    case 89:                        // 'catch'
      shift(89);                    // 'catch'
      break;
    case 96:                        // 'construction'
      shift(96);                    // 'construction'
      break;
    case 99:                        // 'context'
      shift(99);                    // 'context'
      break;
    case 100:                       // 'continue'
      shift(100);                   // 'continue'
      break;
    case 102:                       // 'copy-namespaces'
      shift(102);                   // 'copy-namespaces'
      break;
    case 104:                       // 'decimal-format'
      shift(104);                   // 'decimal-format'
      break;
    case 123:                       // 'encoding'
      shift(123);                   // 'encoding'
      break;
    case 130:                       // 'exit'
      shift(130);                   // 'exit'
      break;
    case 131:                       // 'external'
      shift(131);                   // 'external'
      break;
    case 139:                       // 'ft-option'
      shift(139);                   // 'ft-option'
      break;
    case 152:                       // 'in'
      shift(152);                   // 'in'
      break;
    case 153:                       // 'index'
      shift(153);                   // 'index'
      break;
    case 159:                       // 'integrity'
      shift(159);                   // 'integrity'
      break;
    case 169:                       // 'lax'
      shift(169);                   // 'lax'
      break;
    case 190:                       // 'nodes'
      shift(190);                   // 'nodes'
      break;
    case 197:                       // 'option'
      shift(197);                   // 'option'
      break;
    case 201:                       // 'ordering'
      shift(201);                   // 'ordering'
      break;
    case 220:                       // 'revalidation'
      shift(220);                   // 'revalidation'
      break;
    case 223:                       // 'schema'
      shift(223);                   // 'schema'
      break;
    case 226:                       // 'score'
      shift(226);                   // 'score'
      break;
    case 232:                       // 'sliding'
      shift(232);                   // 'sliding'
      break;
    case 238:                       // 'strict'
      shift(238);                   // 'strict'
      break;
    case 249:                       // 'tumbling'
      shift(249);                   // 'tumbling'
      break;
    case 250:                       // 'type'
      shift(250);                   // 'type'
      break;
    case 255:                       // 'updating'
      shift(255);                   // 'updating'
      break;
    case 259:                       // 'value'
      shift(259);                   // 'value'
      break;
    case 261:                       // 'version'
      shift(261);                   // 'version'
      break;
    case 265:                       // 'while'
      shift(265);                   // 'while'
      break;
    case 95:                        // 'constraint'
      shift(95);                    // 'constraint'
      break;
    case 174:                       // 'loop'
      shift(174);                   // 'loop'
      break;
    default:
      shift(219);                   // 'returning'
    }
    eventHandler.endNonterminal("NCName", e0);
  }

  function shift(t)
  {
    if (l1 == t)
    {
      whitespace();
      eventHandler.terminal(JSONiqTokenizer.TOKEN[l1], b1, e1 > size ? size : e1);
      b0 = b1; e0 = e1; l1 = 0;
    }
    else
    {
      error(b1, e1, 0, l1, t);
    }
  }

  function whitespace()
  {
    if (e0 != b1)
    {
      b0 = e0;
      e0 = b1;
      eventHandler.whitespace(b0, e0);
    }
  }

  function matchW(set)
  {
    var code;
    for (;;)
    {
      code = match(set);
      if (code != 30)               // S^WS
      {
        break;
      }
    }
    return code;
  }

  function lookahead1W(set)
  {
    if (l1 == 0)
    {
      l1 = matchW(set);
      b1 = begin;
      e1 = end;
    }
  }

  function lookahead1(set)
  {
    if (l1 == 0)
    {
      l1 = match(set);
      b1 = begin;
      e1 = end;
    }
  }

  function error(b, e, s, l, t)
  {
    throw new self.ParseException(b, e, s, l, t);
  }

  var lk, b0, e0;
  var l1, b1, e1;
  var eventHandler;

  var input;
  var size;
  var begin;
  var end;

  function match(tokenSetId)
  {
    var nonbmp = false;
    begin = end;
    var current = end;
    var result = JSONiqTokenizer.INITIAL[tokenSetId];
    var state = 0;

    for (var code = result & 4095; code != 0; )
    {
      var charclass;
      var c0 = current < size ? input.charCodeAt(current) : 0;
      ++current;
      if (c0 < 0x80)
      {
        charclass = JSONiqTokenizer.MAP0[c0];
      }
      else if (c0 < 0xd800)
      {
        var c1 = c0 >> 4;
        charclass = JSONiqTokenizer.MAP1[(c0 & 15) + JSONiqTokenizer.MAP1[(c1 & 31) + JSONiqTokenizer.MAP1[c1 >> 5]]];
      }
      else
      {
        if (c0 < 0xdc00)
        {
          var c1 = current < size ? input.charCodeAt(current) : 0;
          if (c1 >= 0xdc00 && c1 < 0xe000)
          {
            ++current;
            c0 = ((c0 & 0x3ff) << 10) + (c1 & 0x3ff) + 0x10000;
            nonbmp = true;
          }
        }
        var lo = 0, hi = 5;
        for (var m = 3; ; m = (hi + lo) >> 1)
        {
          if (JSONiqTokenizer.MAP2[m] > c0) hi = m - 1;
          else if (JSONiqTokenizer.MAP2[6 + m] < c0) lo = m + 1;
          else {charclass = JSONiqTokenizer.MAP2[12 + m]; break;}
          if (lo > hi) {charclass = 0; break;}
        }
      }

      state = code;
      var i0 = (charclass << 12) + code - 1;
      code = JSONiqTokenizer.TRANSITION[(i0 & 15) + JSONiqTokenizer.TRANSITION[i0 >> 4]];

      if (code > 4095)
      {
        result = code;
        code &= 4095;
        end = current;
      }
    }

    result >>= 12;
    if (result == 0)
    {
      end = current - 1;
      var c1 = end < size ? input.charCodeAt(end) : 0;
      if (c1 >= 0xdc00 && c1 < 0xe000) --end;
      return error(begin, end, state, -1, -1);
    }

    if (nonbmp)
    {
      for (var i = result >> 9; i > 0; --i)
      {
        --end;
        var c1 = end < size ? input.charCodeAt(end) : 0;
        if (c1 >= 0xdc00 && c1 < 0xe000) --end;
      }
    }
    else
    {
      end -= result >> 9;
    }

    return (result & 511) - 1;
  }
}

JSONiqTokenizer.getTokenSet = function(tokenSetId)
{
  var set = [];
  var s = tokenSetId < 0 ? - tokenSetId : INITIAL[tokenSetId] & 4095;
  for (var i = 0; i < 279; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 2066 + s - 1;
    var i1 = i0 >> 2;
    var i2 = i1 >> 2;
    var f = JSONiqTokenizer.EXPECTED[(i0 & 3) + JSONiqTokenizer.EXPECTED[(i1 & 3) + JSONiqTokenizer.EXPECTED[(i2 & 3) + JSONiqTokenizer.EXPECTED[i2 >> 2]]]];
    for ( ; f != 0; f >>>= 1, ++j)
    {
      if ((f & 1) != 0)
      {
        set.push(JSONiqTokenizer.TOKEN[j]);
      }
    }
  }
  return set;
};

JSONiqTokenizer.MAP0 =
[
];

JSONiqTokenizer.MAP1 =
[
];

JSONiqTokenizer.MAP2 =
[
];

JSONiqTokenizer.INITIAL =
[
];

JSONiqTokenizer.TRANSITION =
[
];

JSONiqTokenizer.EXPECTED =
[
];

JSONiqTokenizer.TOKEN =
[
  "(0)",
  "JSONChar",
  "JSONCharRef",
  "JSONPredefinedCharRef",
  "ModuleDecl",
  "Annotation",
  "OptionDecl",
  "Operator",
  "Variable",
  "Tag",
  "EndTag",
  "PragmaContents",
  "DirCommentContents",
  "DirPIContents",
  "CDataSectionContents",
  "AttrTest",
  "Wildcard",
  "EQName",
  "IntegerLiteral",
  "DecimalLiteral",
  "DoubleLiteral",
  "PredefinedEntityRef",
  "'\"\"'",
  "EscapeApos",
  "AposChar",
  "ElementContentChar",
  "QuotAttrContentChar",
  "AposAttrContentChar",
  "NCName",
  "QName",
  "S",
  "CharRef",
  "CommentContents",
  "DocTag",
  "DocCommentContents",
  "EOF",
  "'!'",
  "'\"'",
  "'#'",
  "'#)'",
  "'$$'",
  "''''",
  "'('",
  "'(#'",
  "'(:'",
  "'(:~'",
  "')'",
  "'*'",
  "'*'",
  "','",
  "'-->'",
  "'.'",
  "'/'",
  "'/>'",
  "':'",
  "':)'",
  "';'",
  "'<!--'",
  "'<![CDATA['",
  "'<?'",
  "'='",
  "'>'",
  "'?'",
  "'?>'",
  "'NaN'",
  "'['",
  "']'",
  "']]>'",
  "'after'",
  "'all'",
  "'allowing'",
  "'ancestor'",
  "'ancestor-or-self'",
  "'and'",
  "'any'",
  "'append'",
  "'array'",
  "'as'",
  "'ascending'",
  "'at'",
  "'attribute'",
  "'base-uri'",
  "'before'",
  "'boundary-space'",
  "'break'",
  "'by'",
  "'case'",
  "'cast'",
  "'castable'",
  "'catch'",
  "'check'",
  "'child'",
  "'collation'",
  "'collection'",
  "'comment'",
  "'constraint'",
  "'construction'",
  "'contains'",
  "'content'",
  "'context'",
  "'continue'",
  "'copy'",
  "'copy-namespaces'",
  "'count'",
  "'decimal-format'",
  "'decimal-separator'",
  "'declare'",
  "'default'",
  "'delete'",
  "'descendant'",
  "'descendant-or-self'",
  "'descending'",
  "'diacritics'",
  "'different'",
  "'digit'",
  "'distance'",
  "'div'",
  "'document'",
  "'document-node'",
  "'element'",
  "'else'",
  "'empty'",
  "'empty-sequence'",
  "'encoding'",
  "'end'",
  "'entire'",
  "'eq'",
  "'every'",
  "'exactly'",
  "'except'",
  "'exit'",
  "'external'",
  "'first'",
  "'following'",
  "'following-sibling'",
  "'for'",
  "'foreach'",
  "'foreign'",
  "'from'",
  "'ft-option'",
  "'ftand'",
  "'ftnot'",
  "'ftor'",
  "'function'",
  "'ge'",
  "'greatest'",
  "'group'",
  "'grouping-separator'",
  "'gt'",
  "'idiv'",
  "'if'",
  "'import'",
  "'in'",
  "'index'",
  "'infinity'",
  "'inherit'",
  "'insensitive'",
  "'insert'",
  "'instance'",
  "'integrity'",
  "'intersect'",
  "'into'",
  "'is'",
  "'item'",
  "'json'",
  "'json-item'",
  "'key'",
  "'language'",
  "'last'",
  "'lax'",
  "'le'",
  "'least'",
  "'let'",
  "'levels'",
  "'loop'",
  "'lowercase'",
  "'lt'",
  "'minus-sign'",
  "'mod'",
  "'modify'",
  "'module'",
  "'most'",
  "'namespace'",
  "'namespace-node'",
  "'ne'",
  "'next'",
  "'no'",
  "'no-inherit'",
  "'no-preserve'",
  "'node'",
  "'nodes'",
  "'not'",
  "'object'",
  "'occurs'",
  "'of'",
  "'on'",
  "'only'",
  "'option'",
  "'or'",
  "'order'",
  "'ordered'",
  "'ordering'",
  "'paragraph'",
  "'paragraphs'",
  "'parent'",
  "'pattern-separator'",
  "'per-mille'",
  "'percent'",
  "'phrase'",
  "'position'",
  "'preceding'",
  "'preceding-sibling'",
  "'preserve'",
  "'previous'",
  "'processing-instruction'",
  "'relationship'",
  "'rename'",
  "'replace'",
  "'return'",
  "'returning'",
  "'revalidation'",
  "'same'",
  "'satisfies'",
  "'schema'",
  "'schema-attribute'",
  "'schema-element'",
  "'score'",
  "'self'",
  "'sensitive'",
  "'sentence'",
  "'sentences'",
  "'skip'",
  "'sliding'",
  "'some'",
  "'stable'",
  "'start'",
  "'stemming'",
  "'stop'",
  "'strict'",
  "'strip'",
  "'structured-item'",
  "'switch'",
  "'text'",
  "'then'",
  "'thesaurus'",
  "'times'",
  "'to'",
  "'treat'",
  "'try'",
  "'tumbling'",
  "'type'",
  "'typeswitch'",
  "'union'",
  "'unique'",
  "'unordered'",
  "'updating'",
  "'uppercase'",
  "'using'",
  "'validate'",
  "'value'",
  "'variable'",
  "'version'",
  "'weight'",
  "'when'",
  "'where'",
  "'while'",
  "'wildcards'",
  "'window'",
  "'with'",
  "'without'",
  "'word'",
  "'words'",
  "'xquery'",
  "'zero-digit'",
  "'{'",
  "'{{'",
  "'|'",
  "'}'",
  "'}}'"
];

},
{}],
2:[function(_dereq_,module,exports){
'use strict';

var JSONiqTokenizer = _dereq_('./JSONiqTokenizer').JSONiqTokenizer;
var Lexer = _dereq_('./lexer').Lexer;

var keys = 'NaN|after|allowing|ancestor|ancestor-or-self|and|append|array|as|ascending|at|attribute|base-uri|before|boundary-space|break|by|case|cast|castable|catch|child|collation|comment|constraint|construction|contains|context|continue|copy|copy-namespaces|count|decimal-format|decimal-separator|declare|default|delete|descendant|descendant-or-self|descending|digit|div|document|document-node|element|else|empty|empty-sequence|encoding|end|eq|every|except|exit|external|false|first|following|following-sibling|for|from|ft-option|function|ge|greatest|group|grouping-separator|gt|idiv|if|import|in|index|infinity|insert|instance|integrity|intersect|into|is|item|json|json-item|jsoniq|last|lax|le|least|let|loop|lt|minus-sign|mod|modify|module|namespace|namespace-node|ne|next|node|nodes|not|null|object|of|only|option|or|order|ordered|ordering|paragraphs|parent|pattern-separator|per-mille|percent|preceding|preceding-sibling|previous|processing-instruction|rename|replace|return|returning|revalidation|satisfies|schema|schema-attribute|schema-element|score|select|self|sentences|sliding|some|stable|start|strict|switch|text|then|times|to|treat|true|try|tumbling|type|typeswitch|union|unordered|updating|validate|value|variable|version|when|where|while|window|with|words|xquery|zero-digit'.split('|');
var keywords = keys.map(function(val) { return { name: '\'' + val + '\'', token: 'keyword' }; });
var ncnames = keys.map(function(val) { return { name: '\'' + val + '\'', token: 'text', next: function(stack){ stack.pop(); } }; });

var cdata = 'constant.language';
var number = 'constant';
var xmlcomment = 'comment';
var pi = 'xml-pe';
var pragma = 'constant.buildin';
var n = function(name){
    return '\'' + name + '\'';
};
var Rules = {
    start: [
        { name: n('(#'), token: pragma, next: function(stack){ stack.push('Pragma'); } },
        { name: n('(:'), token: 'comment', next: function(stack){ stack.push('Comment'); } },
        { name: n('(:~'), token: 'comment.doc', next: function(stack){ stack.push('CommentDoc'); } },
        { name: n('<!--'), token: xmlcomment, next: function(stack){ stack.push('XMLComment'); } },
        { name: n('<?'), token: pi, next: function(stack) { stack.push('PI'); } },
        { name: n('\'\''), token: 'string', next: function(stack){ stack.push('AposString'); } },
        { name: n('"'), token: 'string', next: function(stack){ stack.push('QuotString'); } },
        { name: 'Annotation', token: 'support.function' },
        { name: 'ModuleDecl', token: 'keyword', next: function(stack){ stack.push('Prefix'); } },
        { name: 'OptionDecl', token: 'keyword', next: function(stack){ stack.push('_EQName'); } },
        { name: 'AttrTest', token: 'support.type' },
        { name: 'Variable', token: 'variable' },
        { name: n('<![CDATA['), token: cdata, next: function(stack){ stack.push('CData'); } },
        { name: 'IntegerLiteral', token: number },
        { name: 'DecimalLiteral', token: number },
        { name: 'DoubleLiteral', token: number },
        { name: 'Operator', token: 'keyword.operator' },
        { name: 'EQName', token: function(val) { return keys.indexOf(val) !== -1 ? 'keyword' : 'support.function'; } },
        { name: n('('), token: 'lparen' },
        { name: n(')'), token: 'rparen' },
        { name: 'Tag', token: 'meta.tag', next: function(stack){ stack.push('StartTag'); } },
        { name: n('}'), token: 'text', next: function(stack){ if(stack.length > 1) { stack.pop(); } } },
        { name: n('{'), token: 'text', next: function(stack){ stack.push('start'); } } //, next: function(stack){ if(stack.length > 1) { stack.pop(); } } }
    ].concat(keywords),
    _EQName: [
        { name: 'EQName', token: 'text', next: function(stack) { stack.pop(); } }
    ].concat(ncnames),
    Prefix: [
        { name: 'NCName', token: 'text', next: function(stack) { stack.pop(); } }
    ].concat(ncnames),
    StartTag: [
        { name: n('>'), token: 'meta.tag', next: function(stack){ stack.push('TagContent'); } },
        { name: 'QName', token: 'entity.other.attribute-name' },
        { name: n('='), token: 'text' },
        { name: n('\'\''), token: 'string', next: function(stack){ stack.push('AposAttr'); } },
        { name: n('"'), token: 'string', next: function(stack){ stack.push('QuotAttr'); } },
        { name: n('/>'), token: 'meta.tag.r', next: function(stack){ stack.pop(); } }
    ],
    TagContent: [
        { name: 'ElementContentChar', token: 'text' },
        { name: n('<![CDATA['), token: cdata, next: function(stack){ stack.push('CData'); } },
        { name: n('<!--'), token: xmlcomment, next: function(stack){ stack.push('XMLComment'); } },
        { name: 'Tag', token: 'meta.tag', next: function(stack){ stack.push('StartTag'); } },
        { name: 'PredefinedEntityRef', token: 'constant.language.escape' },
        { name: 'CharRef', token: 'constant.language.escape' },
        { name: n('{{'), token: 'text' },
        { name: n('}}'), token: 'text' },
        { name: n('{'), token: 'text', next: function(stack){ stack.push('start'); } },
        { name: 'EndTag', token: 'meta.tag', next: function(stack){ stack.pop(); stack.pop(); } }
    ],
    AposAttr: [
        { name: n('\'\''), token: 'string', next: function(stack){ stack.pop(); } },
        { name: 'EscapeApos', token: 'constant.language.escape' },
        { name: 'AposAttrContentChar', token: 'string' },
        { name: 'PredefinedEntityRef', token: 'constant.language.escape' },
        { name: 'CharRef', token: 'constant.language.escape' },
        { name: n('{{'), token: 'string' },
        { name: n('}}'), token: 'string' },
        { name: n('{'), token: 'text', next: function(stack){ stack.push('start'); } }
    ],
    QuotAttr: [
        { name: n('\"'), token: 'string', next: function(stack){ stack.pop(); } },
        { name: 'EscapeQuot', token: 'constant.language.escape' },
        { name: 'QuotAttrContentChar', token: 'string' },
        { name: 'PredefinedEntityRef', token: 'constant.language.escape' },
        { name: 'CharRef', token: 'constant.language.escape' },
        { name: n('{{'), token: 'string' },
        { name: n('}}'), token: 'string' },
        { name: n('{'), token: 'text', next: function(stack){ stack.push('start'); } }
    ],
    Pragma: [
        { name: 'PragmaContents', token: pragma },
        { name: n('#'), token: pragma },
        { name: n('#)'), token: pragma, next: function(stack){ stack.pop(); } }
    ],
    Comment: [
        { name: 'CommentContents', token: 'comment' },
        { name: n('(:'), token: 'comment', next: function(stack){ stack.push('Comment'); } },
        { name: n(':)'), token: 'comment', next: function(stack){ stack.pop(); } }
    ],
    CommentDoc: [
        { name: 'DocCommentContents', token: 'comment.doc' },
        { name: 'DocTag', token: 'comment.doc.tag' },
        { name: n('(:'), token: 'comment.doc', next: function(stack){ stack.push('CommentDoc'); } },
        { name: n(':)'), token: 'comment.doc', next: function(stack){ stack.pop(); } }
    ],
    XMLComment: [
        { name: 'DirCommentContents', token: xmlcomment },
        { name: n('-->'), token: xmlcomment, next: function(stack){ stack.pop(); } }
    ],
    CData: [
        { name: 'CDataSectionContents', token: cdata },
        { name: n(']]>'), token: cdata, next: function(stack){ stack.pop(); } }
    ],
    PI: [
        { name: 'DirPIContents', token: pi },
        { name: n('?'), token: pi },
        { name: n('?>'), token: pi, next: function(stack){ stack.pop(); } }
    ],
    AposString: [
        { name: n('\'\''), token: 'string', next: function(stack){ stack.pop(); } },
        { name: 'PredefinedEntityRef', token: 'constant.language.escape' },
        { name: 'CharRef', token: 'constant.language.escape' },
        { name: 'EscapeApos', token: 'constant.language.escape' },
        { name: 'AposChar', token: 'string' }
    ],
    QuotString: [
        { name: n('"'), token: 'string', next: function(stack){ stack.pop(); } },
        { name: 'JSONPredefinedCharRef', token: 'constant.language.escape' },
        { name: 'JSONCharRef', token: 'constant.language.escape' },
        { name: 'JSONChar', token: 'string' }
    ]
};
    
exports.JSONiqLexer = function(){ return new Lexer(JSONiqTokenizer, Rules); };
},
{"./JSONiqTokenizer":1,"./lexer":3}],
3:[function(_dereq_,module,exports){
'use strict';

var TokenHandler = function(code) {
    var input = code;
    this.tokens = [];
 
    this.reset = function() {
        input = input;
        this.tokens = [];
    };
    
    this.startNonterminal = function() {};
    this.endNonterminal = function() {};

    this.terminal = function(name, begin, end) {
        this.tokens.push({
            name: name,
            value: input.substring(begin, end)
        });
    };

    this.whitespace = function(begin, end) {
        this.tokens.push({
            name: 'WS',
            value: input.substring(begin, end)
        });
    };
};

exports.Lexer = function(Tokenizer, Rules) {

    this.tokens = [];
  
    this.getLineTokens = function(line, state) {
        state = (state === 'start' || !state) ? '["start"]' : state;
        var stack = JSON.parse(state);
        var h = new TokenHandler(line);
        var tokenizer = new Tokenizer(line, h);
        var tokens = [];
    
        while(true) {
            var currentState = stack[stack.length - 1];
            try {
                h.tokens = [];
                tokenizer['parse_' + currentState]();
                var info = null;
        
                if(h.tokens.length > 1 && h.tokens[0].name === 'WS') {
                    tokens.push({
                        type: 'text',
                        value: h.tokens[0].value
                    });
                    h.tokens.splice(0, 1);
                }
        
                var token = h.tokens[0];
                var rules  = Rules[currentState];
                for(var k = 0; k < rules.length; k++) {
                    var rule = Rules[currentState][k];
                    if((typeof(rule.name) === 'function' && rule.name(token)) || rule.name === token.name) {
                        info = rule;
                        break;
                    }
                }
        
                if(token.name === 'EOF') { break; }
                if(token.value === '') { throw 'Encountered empty string lexical rule.'; }
        
                tokens.push({
                    type: info === null ? 'text' : (typeof(info.token) === 'function' ? info.token(token.value) : info.token),
                    value: token.value
                });
        
                if(info && info.next) {
                    info.next(stack);
                }
      
            } catch(e) {
                if(e instanceof tokenizer.ParseException) {
                    var index = 0;
                    for(var i=0; i < tokens.length; i++) {
                        index += tokens[i].value.length;
                    }
                    tokens.push({ type: 'text', value: line.substring(index) });
                    return {
                        tokens: tokens,
                        state: JSON.stringify(['start'])
                    };
                } else {
                    throw e;
                }
            }
        }

        return {
            tokens: tokens,
            state: JSON.stringify(stack)
        };
    };
};
},
{}]},{},[2])
(2)

});

ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Behaviour = require("../behaviour").Behaviour;
var TokenIterator = require("../../token_iterator").TokenIterator;
var lang = require("../../lib/lang");

var SAFE_INSERT_IN_TOKENS =
    ["text", "paren.rparen", "punctuation.operator"];
var SAFE_INSERT_BEFORE_TOKENS =
    ["text", "paren.rparen", "punctuation.operator", "comment"];

var context;
var contextCache = {};
var initContext = function(editor) {
    var id = -1;
    if (editor.multiSelect) {
        id = editor.selection.index;
        if (contextCache.rangeCount != editor.multiSelect.rangeCount)
            contextCache = {rangeCount: editor.multiSelect.rangeCount};
    }
    if (contextCache[id])
        return context = contextCache[id];
    context = contextCache[id] = {
        autoInsertedBrackets: 0,
        autoInsertedRow: -1,
        autoInsertedLineEnd: "",
        maybeInsertedBrackets: 0,
        maybeInsertedRow: -1,
        maybeInsertedLineStart: "",
        maybeInsertedLineEnd: ""
    };
};

var CstyleBehaviour = function() {
    this.add("braces", "insertion", function(state, action, editor, session, text) {
        var cursor = editor.getCursorPosition();
        var line = session.doc.getLine(cursor.row);
        if (text == '{') {
            initContext(editor);
            var selection = editor.getSelectionRange();
            var selected = session.doc.getTextRange(selection);
            if (selected !== "" && selected !== "{" && editor.getWrapBehavioursEnabled()) {
                return {
                    text: '{' + selected + '}',
                    selection: false
                };
            } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
                if (/[\]\}\)]/.test(line[cursor.column]) || editor.inMultiSelectMode) {
                    CstyleBehaviour.recordAutoInsert(editor, session, "}");
                    return {
                        text: '{}',
                        selection: [1, 1]
                    };
                } else {
                    CstyleBehaviour.recordMaybeInsert(editor, session, "{");
                    return {
                        text: '{',
                        selection: [1, 1]
                    };
                }
            }
        } else if (text == '}') {
            initContext(editor);
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            if (rightChar == '}') {
                var matching = session.$findOpeningBracket('}', {column: cursor.column + 1, row: cursor.row});
                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
                    CstyleBehaviour.popAutoInsertedClosing();
                    return {
                        text: '',
                        selection: [1, 1]
                    };
                }
            }
        } else if (text == "\n" || text == "\r\n") {
            initContext(editor);
            var closing = "";
            if (CstyleBehaviour.isMaybeInsertedClosing(cursor, line)) {
                closing = lang.stringRepeat("}", context.maybeInsertedBrackets);
                CstyleBehaviour.clearMaybeInsertedClosing();
            }
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            if (rightChar === '}') {
                var openBracePos = session.findMatchingBracket({row: cursor.row, column: cursor.column+1}, '}');
                if (!openBracePos)
                     return null;
                var next_indent = this.$getIndent(session.getLine(openBracePos.row));
            } else if (closing) {
                var next_indent = this.$getIndent(line);
            } else {
                CstyleBehaviour.clearMaybeInsertedClosing();
                return;
            }
            var indent = next_indent + session.getTabString();

            return {
                text: '\n' + indent + '\n' + next_indent + closing,
                selection: [1, indent.length, 1, indent.length]
            };
        } else {
            CstyleBehaviour.clearMaybeInsertedClosing();
        }
    });

    this.add("braces", "deletion", function(state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && selected == '{') {
            initContext(editor);
            var line = session.doc.getLine(range.start.row);
            var rightChar = line.substring(range.end.column, range.end.column + 1);
            if (rightChar == '}') {
                range.end.column++;
                return range;
            } else {
                context.maybeInsertedBrackets--;
            }
        }
    });

    this.add("parens", "insertion", function(state, action, editor, session, text) {
        if (text == '(') {
            initContext(editor);
            var selection = editor.getSelectionRange();
            var selected = session.doc.getTextRange(selection);
            if (selected !== "" && editor.getWrapBehavioursEnabled()) {
                return {
                    text: '(' + selected + ')',
                    selection: false
                };
            } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
                CstyleBehaviour.recordAutoInsert(editor, session, ")");
                return {
                    text: '()',
                    selection: [1, 1]
                };
            }
        } else if (text == ')') {
            initContext(editor);
            var cursor = editor.getCursorPosition();
            var line = session.doc.getLine(cursor.row);
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            if (rightChar == ')') {
                var matching = session.$findOpeningBracket(')', {column: cursor.column + 1, row: cursor.row});
                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
                    CstyleBehaviour.popAutoInsertedClosing();
                    return {
                        text: '',
                        selection: [1, 1]
                    };
                }
            }
        }
    });

    this.add("parens", "deletion", function(state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && selected == '(') {
            initContext(editor);
            var line = session.doc.getLine(range.start.row);
            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
            if (rightChar == ')') {
                range.end.column++;
                return range;
            }
        }
    });

    this.add("brackets", "insertion", function(state, action, editor, session, text) {
        if (text == '[') {
            initContext(editor);
            var selection = editor.getSelectionRange();
            var selected = session.doc.getTextRange(selection);
            if (selected !== "" && editor.getWrapBehavioursEnabled()) {
                return {
                    text: '[' + selected + ']',
                    selection: false
                };
            } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
                CstyleBehaviour.recordAutoInsert(editor, session, "]");
                return {
                    text: '[]',
                    selection: [1, 1]
                };
            }
        } else if (text == ']') {
            initContext(editor);
            var cursor = editor.getCursorPosition();
            var line = session.doc.getLine(cursor.row);
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            if (rightChar == ']') {
                var matching = session.$findOpeningBracket(']', {column: cursor.column + 1, row: cursor.row});
                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
                    CstyleBehaviour.popAutoInsertedClosing();
                    return {
                        text: '',
                        selection: [1, 1]
                    };
                }
            }
        }
    });

    this.add("brackets", "deletion", function(state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && selected == '[') {
            initContext(editor);
            var line = session.doc.getLine(range.start.row);
            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
            if (rightChar == ']') {
                range.end.column++;
                return range;
            }
        }
    });

    this.add("string_dquotes", "insertion", function(state, action, editor, session, text) {
        if (text == '"' || text == "'") {
            initContext(editor);
            var quote = text;
            var selection = editor.getSelectionRange();
            var selected = session.doc.getTextRange(selection);
            if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
                return {
                    text: quote + selected + quote,
                    selection: false
                };
            } else {
                var cursor = editor.getCursorPosition();
                var line = session.doc.getLine(cursor.row);
                var leftChar = line.substring(cursor.column-1, cursor.column);
                if (leftChar == '\\') {
                    return null;
                }
                var tokens = session.getTokens(selection.start.row);
                var col = 0, token;
                var quotepos = -1; // Track whether we're inside an open quote.

                for (var x = 0; x < tokens.length; x++) {
                    token = tokens[x];
                    if (token.type == "string") {
                      quotepos = -1;
                    } else if (quotepos < 0) {
                      quotepos = token.value.indexOf(quote);
                    }
                    if ((token.value.length + col) > selection.start.column) {
                        break;
                    }
                    col += tokens[x].value.length;
                }
                if (!token || (quotepos < 0 && token.type !== "comment" && (token.type !== "string" || ((selection.start.column !== token.value.length+col-1) && token.value.lastIndexOf(quote) === token.value.length-1)))) {
                    if (!CstyleBehaviour.isSaneInsertion(editor, session))
                        return;
                    return {
                        text: quote + quote,
                        selection: [1,1]
                    };
                } else if (token && token.type === "string") {
                    var rightChar = line.substring(cursor.column, cursor.column + 1);
                    if (rightChar == quote) {
                        return {
                            text: '',
                            selection: [1, 1]
                        };
                    }
                }
            }
        }
    });

    this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
            initContext(editor);
            var line = session.doc.getLine(range.start.row);
            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
            if (rightChar == selected) {
                range.end.column++;
                return range;
            }
        }
    });

};

    
CstyleBehaviour.isSaneInsertion = function(editor, session) {
    var cursor = editor.getCursorPosition();
    var iterator = new TokenIterator(session, cursor.row, cursor.column);
    if (!this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS)) {
        var iterator2 = new TokenIterator(session, cursor.row, cursor.column + 1);
        if (!this.$matchTokenType(iterator2.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS))
            return false;
    }
    iterator.stepForward();
    return iterator.getCurrentTokenRow() !== cursor.row ||
        this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_BEFORE_TOKENS);
};

CstyleBehaviour.$matchTokenType = function(token, types) {
    return types.indexOf(token.type || token) > -1;
};

CstyleBehaviour.recordAutoInsert = function(editor, session, bracket) {
    var cursor = editor.getCursorPosition();
    var line = session.doc.getLine(cursor.row);
    if (!this.isAutoInsertedClosing(cursor, line, context.autoInsertedLineEnd[0]))
        context.autoInsertedBrackets = 0;
    context.autoInsertedRow = cursor.row;
    context.autoInsertedLineEnd = bracket + line.substr(cursor.column);
    context.autoInsertedBrackets++;
};

CstyleBehaviour.recordMaybeInsert = function(editor, session, bracket) {
    var cursor = editor.getCursorPosition();
    var line = session.doc.getLine(cursor.row);
    if (!this.isMaybeInsertedClosing(cursor, line))
        context.maybeInsertedBrackets = 0;
    context.maybeInsertedRow = cursor.row;
    context.maybeInsertedLineStart = line.substr(0, cursor.column) + bracket;
    context.maybeInsertedLineEnd = line.substr(cursor.column);
    context.maybeInsertedBrackets++;
};

CstyleBehaviour.isAutoInsertedClosing = function(cursor, line, bracket) {
    return context.autoInsertedBrackets > 0 &&
        cursor.row === context.autoInsertedRow &&
        bracket === context.autoInsertedLineEnd[0] &&
        line.substr(cursor.column) === context.autoInsertedLineEnd;
};

CstyleBehaviour.isMaybeInsertedClosing = function(cursor, line) {
    return context.maybeInsertedBrackets > 0 &&
        cursor.row === context.maybeInsertedRow &&
        line.substr(cursor.column) === context.maybeInsertedLineEnd &&
        line.substr(0, cursor.column) == context.maybeInsertedLineStart;
};

CstyleBehaviour.popAutoInsertedClosing = function() {
    context.autoInsertedLineEnd = context.autoInsertedLineEnd.substr(1);
    context.autoInsertedBrackets--;
};

CstyleBehaviour.clearMaybeInsertedClosing = function() {
    if (context) {
        context.maybeInsertedBrackets = 0;
        context.maybeInsertedRow = -1;
    }
};



oop.inherits(CstyleBehaviour, Behaviour);

exports.CstyleBehaviour = CstyleBehaviour;
});

ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Behaviour = require("../behaviour").Behaviour;
var TokenIterator = require("../../token_iterator").TokenIterator;
var lang = require("../../lib/lang");

function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
}

var XmlBehaviour = function () {

    this.add("string_dquotes", "insertion", function (state, action, editor, session, text) {
        if (text == '"' || text == "'") {
            var quote = text;
            var selected = session.doc.getTextRange(editor.getSelectionRange());
            if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
                return {
                    text: quote + selected + quote,
                    selection: false
                };
            }

            var cursor = editor.getCursorPosition();
            var line = session.doc.getLine(cursor.row);
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();

            if (rightChar == quote && (is(token, "attribute-value") || is(token, "string"))) {
                return {
                    text: "",
                    selection: [1, 1]
                };
            }

            if (!token)
                token = iterator.stepBackward();

            if (!token)
                return;

            while (is(token, "tag-whitespace") || is(token, "whitespace")) {
                token = iterator.stepBackward();
            }
            var rightSpace = !rightChar || rightChar.match(/\s/);
            if (is(token, "attribute-equals") && (rightSpace || rightChar == '>') || (is(token, "decl-attribute-equals") && (rightSpace || rightChar == '?'))) {
                return {
                    text: quote + quote,
                    selection: [1, 1]
                };
            }
        }
    });

    this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
            var line = session.doc.getLine(range.start.row);
            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
            if (rightChar == selected) {
                range.end.column++;
                return range;
            }
        }
    });

    this.add("autoclosing", "insertion", function (state, action, editor, session, text) {
        if (text == '>') {
            var position = editor.getCursorPosition();
            var iterator = new TokenIterator(session, position.row, position.column);
            var token = iterator.getCurrentToken() || iterator.stepBackward();
            if (!token || !(is(token, "tag-name") || is(token, "tag-whitespace") || is(token, "attribute-name") || is(token, "attribute-equals") || is(token, "attribute-value")))
                return;
            if (is(token, "reference.attribute-value"))
                return;
            if (is(token, "attribute-value")) {
                var firstChar = token.value.charAt(0);
                if (firstChar == '"' || firstChar == "'") {
                    var lastChar = token.value.charAt(token.value.length - 1);
                    var tokenEnd = iterator.getCurrentTokenColumn() + token.value.length;
                    if (tokenEnd > position.column || tokenEnd == position.column && firstChar != lastChar)
                        return;
                }
            }
            while (!is(token, "tag-name")) {
                token = iterator.stepBackward();
            }

            var tokenRow = iterator.getCurrentTokenRow();
            var tokenColumn = iterator.getCurrentTokenColumn();
            if (is(iterator.stepBackward(), "end-tag-open"))
                return;

            var element = token.value;
            if (tokenRow == position.row)
                element = element.substring(0, position.column - tokenColumn);

            if (this.voidElements.hasOwnProperty(element.toLowerCase()))
                 return;

            return {
               text: ">" + "</" + element + ">",
               selection: [1, 1]
            };
        }
    });

    this.add("autoindent", "insertion", function (state, action, editor, session, text) {
        if (text == "\n") {
            var cursor = editor.getCursorPosition();
            var line = session.getLine(cursor.row);
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();

            if (token && token.type.indexOf("tag-close") !== -1) {
                while (token && token.type.indexOf("tag-name") === -1) {
                    token = iterator.stepBackward();
                }

                if (!token) {
                    return;
                }

                var tag = token.value;
                var row = iterator.getCurrentTokenRow();
                token = iterator.stepBackward();
                if (!token || token.type.indexOf("end-tag") !== -1) {
                    return;
                }

                if (this.voidElements && !this.voidElements[tag]) {
                    var nextToken = session.getTokenAt(cursor.row, cursor.column+1);
                    var line = session.getLine(row);
                    var nextIndent = this.$getIndent(line);
                    var indent = nextIndent + session.getTabString();

                    if (nextToken && nextToken.value === "</") {
                        return {
                            text: "\n" + indent + "\n" + nextIndent,
                            selection: [1, indent.length, 1, indent.length]
                        };
                    } else {
                        return {
                            text: "\n" + indent
                        };
                    }
                }
            }
        }
    });

};

oop.inherits(XmlBehaviour, Behaviour);

exports.XmlBehaviour = XmlBehaviour;
});

ace.define("ace/mode/behaviour/xquery",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/mode/behaviour/xml","ace/token_iterator"], function(require, exports, module) {
"use strict";

  var oop = require("../../lib/oop");
  var Behaviour = require('../behaviour').Behaviour;
  var CstyleBehaviour = require('./cstyle').CstyleBehaviour;
  var XmlBehaviour = require("../behaviour/xml").XmlBehaviour;
  var TokenIterator = require("../../token_iterator").TokenIterator;

function hasType(token, type) {
    var hasType = true;
    var typeList = token.type.split('.');
    var needleList = type.split('.');
    needleList.forEach(function(needle){
        if (typeList.indexOf(needle) == -1) {
            hasType = false;
            return false;
        }
    });
    return hasType;
}
 
  var XQueryBehaviour = function () {
      
      this.inherit(CstyleBehaviour, ["braces", "parens", "string_dquotes"]); // Get string behaviour
      this.inherit(XmlBehaviour); // Get xml behaviour
      
      this.add("autoclosing", "insertion", function (state, action, editor, session, text) {
        if (text == '>') {
            var position = editor.getCursorPosition();
            var iterator = new TokenIterator(session, position.row, position.column);
            var token = iterator.getCurrentToken();
            var atCursor = false;
            var state = JSON.parse(state).pop();
            if ((token && token.value === '>') || state !== "StartTag") return;
            if (!token || !hasType(token, 'meta.tag') && !(hasType(token, 'text') && token.value.match('/'))){
                do {
                    token = iterator.stepBackward();
                } while (token && (hasType(token, 'string') || hasType(token, 'keyword.operator') || hasType(token, 'entity.attribute-name') || hasType(token, 'text')));
            } else {
                atCursor = true;
            }
            var previous = iterator.stepBackward();
            if (!token || !hasType(token, 'meta.tag') || (previous !== null && previous.value.match('/'))) {
                return
            }
            var tag = token.value.substring(1);
            if (atCursor){
                var tag = tag.substring(0, position.column - token.start);
            }

            return {
               text: '>' + '</' + tag + '>',
               selection: [1, 1]
            }
        }
    });

  }
  oop.inherits(XQueryBehaviour, Behaviour);

  exports.XQueryBehaviour = XQueryBehaviour;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/)#(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/jsoniq",["require","exports","module","ace/worker/worker_client","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules","ace/mode/xquery/jsoniq_lexer","ace/range","ace/mode/behaviour/xquery","ace/mode/folding/cstyle","ace/anchor"], function(require, exports, module) {
"use strict";

var WorkerClient = require("../worker/worker_client").WorkerClient;
var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var JSONiqLexer = require("./xquery/jsoniq_lexer").JSONiqLexer;
var Range = require("../range").Range;
var XQueryBehaviour = require("./behaviour/xquery").XQueryBehaviour;
var CStyleFoldMode = require("./folding/cstyle").FoldMode;
var Anchor = require("../anchor").Anchor;

var Mode = function() {
    this.$tokenizer   = new JSONiqLexer();
    this.$behaviour   = new XQueryBehaviour();
    this.foldingRules = new CStyleFoldMode();
    this.$highlightRules = new TextHighlightRules();
};

oop.inherits(Mode, TextMode);

(function() {

    this.completer = {
        getCompletions: function(editor, session, pos, prefix, callback) {
            if (!session.$worker)
                return callback();
            session.$worker.emit("complete", { data: { pos: pos, prefix: prefix } });
            session.$worker.on("complete", function(e){
                callback(null, e.data);
            });
        }
    };

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var match = line.match(/\s*(?:then|else|return|[{\(]|<\w+>)\s*$/);
        if (match)
            indent += tab;
        return indent;
    };
    
    this.checkOutdent = function(state, line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*[\}\)]/.test(input);
    };
    
    this.autoOutdent = function(state, doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*[\}\)])/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.toggleCommentLines = function(state, doc, startRow, endRow) {
        var i, line;
        var outdent = true;
        var re = /^\s*\(:(.*):\)/;

        for (i=startRow; i<= endRow; i++) {
            if (!re.test(doc.getLine(i))) {
                outdent = false;
                break;
            }
        }

        var range = new Range(0, 0, 0, 0);
        for (i=startRow; i<= endRow; i++) {
            line = doc.getLine(i);
            range.start.row  = i;
            range.end.row    = i;
            range.end.column = line.length;

            doc.replace(range, outdent ? line.match(re)[1] : "(:" + line + ":)");
        }
    };
    this.createWorker = function(session) {
        
      var worker = new WorkerClient(["ace"], "ace/mode/xquery_worker", "XQueryWorker");
        var that = this;

        worker.attachToDocument(session.getDocument());
        
        worker.on("ok", function(e) {
          session.clearAnnotations();
        });
        
        worker.on("markers", function(e) {
          session.clearAnnotations();
          that.addMarkers(e.data, session);
        });
 
        return worker;
    };
 
    this.removeMarkers = function(session) {
        var markers = session.getMarkers(false);
        for (var id in markers) {
            if (markers[id].clazz.indexOf('language_highlight_') === 0) {
                session.removeMarker(id);
            }
        }
        for (var i = 0; i < session.markerAnchors.length; i++) {
            session.markerAnchors[i].detach();
        }
        session.markerAnchors = [];
    };

    this.addMarkers = function(annos, mySession) {
        var _self = this;
        
        if (!mySession.markerAnchors) mySession.markerAnchors = [];
        this.removeMarkers(mySession);
        mySession.languageAnnos = [];
        annos.forEach(function(anno) {
            var anchor = new Anchor(mySession.getDocument(), anno.pos.sl, anno.pos.sc || 0);
            mySession.markerAnchors.push(anchor);
            var markerId;
            var colDiff = anno.pos.ec - anno.pos.sc;
            var rowDiff = anno.pos.el - anno.pos.sl;
            var gutterAnno = {
                guttertext: anno.message,
                type: anno.level || "warning",
                text: anno.message
            };

            function updateFloat(single) {
                if (markerId)
                    mySession.removeMarker(markerId);
                gutterAnno.row = anchor.row;
                if (anno.pos.sc !== undefined && anno.pos.ec !== undefined) {
                    var range = new Range(anno.pos.sl, anno.pos.sc, anno.pos.el, anno.pos.ec);
                    markerId = mySession.addMarker(range, "language_highlight_" + (anno.type ? anno.type : "default"));
                }
                if (single) mySession.setAnnotations(mySession.languageAnnos);
            }
            updateFloat();
            anchor.on("change", function() {
                updateFloat(true);
            });
            if (anno.message) mySession.languageAnnos.push(gutterAnno);
        });
        mySession.setAnnotations(mySession.languageAnnos);
    }; 

    this.$id = "ace/mode/jsoniq";
}).call(Mode.prototype);

exports.Mode = Mode;
});