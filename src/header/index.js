import empty from 'empty-element'
import template from './template'

module.exports = function(ctx, next){
 var container = document.getElementById('header-container')
 empty(container).appendChild(template)
 next()
}