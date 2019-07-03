import unified = require('unified')
import parse = require('remark-parse')

// Use Plugin
unified().use(parse, {
  gfm: true
})

// Now it works as expected.
unified().use(parse, {
  gfm: 'wrong'
})

// Use Plugin Tuple
unified().use([parse, {
  gfm: true
}])

// We cannot catch type errors until providing generic
unified().use([parse, {gfm: 'wrong'}])

// But this is too verbose... Do we really need to provide this verbose way for typescript adopters?
unified().use<parse.RemarkParseOptions>([parse, {gfm: 'wrong'}])
