var HelloWorld = (function () { 'use strict';

function renderMainFragment ( root, component ) {
	var h1 = createElement( 'h1' );
	h1.style.cssText = "color: " + ( root.color ) + ";";
	
	var last_text = root.hello + root.name
	var text = createText( last_text );
	appendNode( text, h1 );
	var text1 = createText( "\n\n" );
	var text2 = createText( "\n" );
	
	var p = createElement( 'p' );
	
	appendNode( createText( "if 単体" ), p );
	var text4 = createText( "\n" );
	var ifBlock_anchor = createComment();
	
	function getBlock ( root ) {
		if ( root.user.loggedIn ) return renderIfBlock_0;
		return null;
	}
	
	var currentBlock = getBlock( root );
	var ifBlock = currentBlock && currentBlock( root, component );
	
	var text5 = createText( "\n\n" );
	var ifBlock1_anchor = createComment();
	
	function getBlock1 ( root ) {
		if ( !root.user.loggedIn ) return renderIfBlock1_0;
		return null;
	}
	
	var currentBlock1 = getBlock1( root );
	var ifBlock1 = currentBlock1 && currentBlock1( root, component );
	
	var text6 = createText( "\n\n" );
	
	var p1 = createElement( 'p' );
	
	appendNode( createText( "if else" ), p1 );
	var text8 = createText( "\n" );
	var text9 = createText( "\n" );
	var ifBlock2_anchor = createComment();
	
	function getBlock2 ( root ) {
		if ( root.user.loggedIn ) return renderIfBlock2_0;
		return renderIfBlock2_1;
	}
	
	var currentBlock2 = getBlock2( root );
	var ifBlock2 = currentBlock2 && currentBlock2( root, component );
	
	var text10 = createText( "\n\n" );
	var text11 = createText( "\n" );
	
	var p2 = createElement( 'p' );
	
	appendNode( createText( "if elseif else" ), p2 );
	var text13 = createText( "\n" );
	var ifBlock3_anchor = createComment();
	
	function getBlock3 ( root ) {
		if ( root.x > 10 ) return renderIfBlock3_0;
		if ( 5 > root.x ) return renderIfBlock3_1;
		return renderIfBlock3_2;
	}
	
	var currentBlock3 = getBlock3( root );
	var ifBlock3 = currentBlock3 && currentBlock3( root, component );
	
	var text14 = createText( "\n\n" );
	var text15 = createText( "\n" );
	
	var p3 = createElement( 'p' );
	
	appendNode( createText( "繰り返し" ), p3 );
	var text17 = createText( "\n" );
	
	var ul = createElement( 'ul' );
	
	var eachBlock_anchor = createComment();
	appendNode( eachBlock_anchor, ul );
	var eachBlock_value = root.items;
	var eachBlock_iterations = [];
	
	for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
		eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
		eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
	}
	
	var text18 = createText( "\n\n" );
	var text19 = createText( "\n" );
	
	var p4 = createElement( 'p' );
	
	appendNode( createText( "ディレクティブ" ), p4 );
	var text21 = createText( "\n" );
	
	var p5 = createElement( 'p' );
	
	appendNode( createText( "Count: " ), p5 );
	var last_text23 = root.count
	var text23 = createText( last_text23 );
	appendNode( text23, p5 );
	var text24 = createText( "\n" );
	
	var button = createElement( 'button' );
	
	function clickHandler ( event ) {
		var root = this.__svelte.root;
		
		component.set({ count: root.count + 1 });
	}
	
	addEventListener( button, 'click', clickHandler );
	
	button.__svelte = {
		root: root
	};
	
	appendNode( createText( "+1" ), button );

	return {
		mount: function ( target, anchor ) {
			insertNode( h1, target, anchor );
			insertNode( text1, target, anchor );
			insertNode( text2, target, anchor );
			insertNode( p, target, anchor );
			insertNode( text4, target, anchor );
			insertNode( ifBlock_anchor, target, anchor );
			if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
			insertNode( text5, target, anchor );
			insertNode( ifBlock1_anchor, target, anchor );
			if ( ifBlock1 ) ifBlock1.mount( ifBlock1_anchor.parentNode, ifBlock1_anchor );
			insertNode( text6, target, anchor );
			insertNode( p1, target, anchor );
			insertNode( text8, target, anchor );
			insertNode( text9, target, anchor );
			insertNode( ifBlock2_anchor, target, anchor );
			if ( ifBlock2 ) ifBlock2.mount( ifBlock2_anchor.parentNode, ifBlock2_anchor );
			insertNode( text10, target, anchor );
			insertNode( text11, target, anchor );
			insertNode( p2, target, anchor );
			insertNode( text13, target, anchor );
			insertNode( ifBlock3_anchor, target, anchor );
			if ( ifBlock3 ) ifBlock3.mount( ifBlock3_anchor.parentNode, ifBlock3_anchor );
			insertNode( text14, target, anchor );
			insertNode( text15, target, anchor );
			insertNode( p3, target, anchor );
			insertNode( text17, target, anchor );
			insertNode( ul, target, anchor );
			insertNode( text18, target, anchor );
			insertNode( text19, target, anchor );
			insertNode( p4, target, anchor );
			insertNode( text21, target, anchor );
			insertNode( p5, target, anchor );
			insertNode( text24, target, anchor );
			insertNode( button, target, anchor );
		},
		
		update: function ( changed, root ) {
			var __tmp;
		
			h1.style.cssText = "color: " + ( root.color ) + ";";
			
			if ( ( __tmp = root.hello + root.name ) !== last_text ) {
				text.data = last_text = __tmp;
			}
			
			var _currentBlock = currentBlock;
			currentBlock = getBlock( root );
			if ( _currentBlock === currentBlock && ifBlock) {
				ifBlock.update( changed, root );
			} else {
				if ( ifBlock ) ifBlock.teardown( true );
				ifBlock = currentBlock && currentBlock( root, component );
				if ( ifBlock ) ifBlock.mount( ifBlock_anchor.parentNode, ifBlock_anchor );
			}
			
			var _currentBlock1 = currentBlock1;
			currentBlock1 = getBlock1( root );
			if ( _currentBlock1 === currentBlock1 && ifBlock1) {
				ifBlock1.update( changed, root );
			} else {
				if ( ifBlock1 ) ifBlock1.teardown( true );
				ifBlock1 = currentBlock1 && currentBlock1( root, component );
				if ( ifBlock1 ) ifBlock1.mount( ifBlock1_anchor.parentNode, ifBlock1_anchor );
			}
			
			var _currentBlock2 = currentBlock2;
			currentBlock2 = getBlock2( root );
			if ( _currentBlock2 === currentBlock2 && ifBlock2) {
				ifBlock2.update( changed, root );
			} else {
				if ( ifBlock2 ) ifBlock2.teardown( true );
				ifBlock2 = currentBlock2 && currentBlock2( root, component );
				if ( ifBlock2 ) ifBlock2.mount( ifBlock2_anchor.parentNode, ifBlock2_anchor );
			}
			
			var _currentBlock3 = currentBlock3;
			currentBlock3 = getBlock3( root );
			if ( _currentBlock3 === currentBlock3 && ifBlock3) {
				ifBlock3.update( changed, root );
			} else {
				if ( ifBlock3 ) ifBlock3.teardown( true );
				ifBlock3 = currentBlock3 && currentBlock3( root, component );
				if ( ifBlock3 ) ifBlock3.mount( ifBlock3_anchor.parentNode, ifBlock3_anchor );
			}
			
			var eachBlock_value = root.items;
			
			for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
				if ( !eachBlock_iterations[i] ) {
					eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
					eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
				} else {
					eachBlock_iterations[i].update( changed, root, eachBlock_value, eachBlock_value[i], i );
				}
			}
			
			teardownEach( eachBlock_iterations, true, eachBlock_value.length );
			
			eachBlock_iterations.length = eachBlock_value.length;
			
			if ( ( __tmp = root.count ) !== last_text23 ) {
				text23.data = last_text23 = __tmp;
			}
			
			button.__svelte.root = root;
		},
		
		teardown: function ( detach ) {
			if ( ifBlock ) ifBlock.teardown( detach );
			if ( ifBlock1 ) ifBlock1.teardown( detach );
			if ( ifBlock2 ) ifBlock2.teardown( detach );
			if ( ifBlock3 ) ifBlock3.teardown( detach );
			
			teardownEach( eachBlock_iterations, false );
			
			removeEventListener( button, 'click', clickHandler );
			
			if ( detach ) {
				detachNode( h1 );
				detachNode( text1 );
				detachNode( text2 );
				detachNode( p );
				detachNode( text4 );
				detachNode( ifBlock_anchor );
				detachNode( text5 );
				detachNode( ifBlock1_anchor );
				detachNode( text6 );
				detachNode( p1 );
				detachNode( text8 );
				detachNode( text9 );
				detachNode( ifBlock2_anchor );
				detachNode( text10 );
				detachNode( text11 );
				detachNode( p2 );
				detachNode( text13 );
				detachNode( ifBlock3_anchor );
				detachNode( text14 );
				detachNode( text15 );
				detachNode( p3 );
				detachNode( text17 );
				detachNode( ul );
				detachNode( text18 );
				detachNode( text19 );
				detachNode( p4 );
				detachNode( text21 );
				detachNode( p5 );
				detachNode( text24 );
				detachNode( button );
			}
		}
	};
}

function renderEachBlock ( root, eachBlock_value, item, item__index, component ) {
	var li = createElement( 'li' );
	
	var last_text = item.name
	var text = createText( last_text );
	appendNode( text, li );
	appendNode( createText( " " ), li );
	var last_text2 = item.age
	var text2 = createText( last_text2 );
	appendNode( text2, li );

	return {
		mount: function ( target, anchor ) {
			insertNode( li, target, anchor );
		},
		
		update: function ( changed, root, eachBlock_value, item, item__index ) {
			var __tmp;
		
			if ( ( __tmp = item.name ) !== last_text ) {
				text.data = last_text = __tmp;
			}
			
			if ( ( __tmp = item.age ) !== last_text2 ) {
				text2.data = last_text2 = __tmp;
			}
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( li );
			}
		}
	};
}

function renderIfBlock3_2 ( root, component ) {
	var p = createElement( 'p' );
	
	var last_text = root.x
	var text = createText( last_text );
	appendNode( text, p );
	appendNode( createText( " is bettween 5 and 10" ), p );

	return {
		mount: function ( target, anchor ) {
			insertNode( p, target, anchor );
		},
		
		update: function ( changed, root ) {
			var __tmp;
		
			if ( ( __tmp = root.x ) !== last_text ) {
				text.data = last_text = __tmp;
			}
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( p );
			}
		}
	};
}

function renderIfBlock3_1 ( root, component ) {
	var p = createElement( 'p' );
	
	var last_text = root.x
	var text = createText( last_text );
	appendNode( text, p );
	appendNode( createText( " is less than 5" ), p );

	return {
		mount: function ( target, anchor ) {
			insertNode( p, target, anchor );
		},
		
		update: function ( changed, root ) {
			var __tmp;
		
			if ( ( __tmp = root.x ) !== last_text ) {
				text.data = last_text = __tmp;
			}
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( p );
			}
		}
	};
}

function renderIfBlock3_0 ( root, component ) {
	var p = createElement( 'p' );
	
	var last_text = root.x
	var text = createText( last_text );
	appendNode( text, p );
	appendNode( createText( " is greater than 10" ), p );

	return {
		mount: function ( target, anchor ) {
			insertNode( p, target, anchor );
		},
		
		update: function ( changed, root ) {
			var __tmp;
		
			if ( ( __tmp = root.x ) !== last_text ) {
				text.data = last_text = __tmp;
			}
		},
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( p );
			}
		}
	};
}

function renderIfBlock2_1 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "/login";
	
	appendNode( createText( "log in" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function renderIfBlock2_0 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "/logout";
	
	appendNode( createText( "log out" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function renderIfBlock1_0 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "/login";
	
	appendNode( createText( "log in" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function renderIfBlock_0 ( root, component ) {
	var a = createElement( 'a' );
	a.href = "/logout";
	
	appendNode( createText( "log out" ), a );

	return {
		mount: function ( target, anchor ) {
			insertNode( a, target, anchor );
		},
		
		update: noop,
		
		teardown: function ( detach ) {
			if ( detach ) {
				detachNode( a );
			}
		}
	};
}

function HelloWorld ( options ) {
	options = options || {};
	this._state = options.data || {};
	
	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};
	
	this._handlers = Object.create( null );
	
	this._root = options._root;
	this._yield = options._yield;
	
	this._torndown = false;
	
	this._fragment = renderMainFragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
}

HelloWorld.prototype.get = function get( key ) {
 	return key ? this._state[ key ] : this._state;
 };

HelloWorld.prototype.fire = function fire( eventName, data ) {
 	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
 	if ( !handlers ) return;
 
 	for ( var i = 0; i < handlers.length; i += 1 ) {
 		handlers[i].call( this, data );
 	}
 };

HelloWorld.prototype.observe = function observe( key, callback, options ) {
 	var group = ( options && options.defer ) ? this._observers.pre : this._observers.post;
 
 	( group[ key ] || ( group[ key ] = [] ) ).push( callback );
 
 	if ( !options || options.init !== false ) {
 		callback.__calling = true;
 		callback.call( this, this._state[ key ] );
 		callback.__calling = false;
 	}
 
 	return {
 		cancel: function () {
 			var index = group[ key ].indexOf( callback );
 			if ( ~index ) group[ key ].splice( index, 1 );
 		}
 	};
 };

HelloWorld.prototype.on = function on( eventName, handler ) {
 	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
 	handlers.push( handler );
 
 	return {
 		cancel: function () {
 			var index = handlers.indexOf( handler );
 			if ( ~index ) handlers.splice( index, 1 );
 		}
 	};
 };

HelloWorld.prototype.set = function set( newState ) {
 	this._set( newState );
 	( this._root || this )._flush();
 };

HelloWorld.prototype._flush = function _flush() {
 	if ( !this._renderHooks ) return;
 
 	while ( this._renderHooks.length ) {
 		var hook = this._renderHooks.pop();
 		hook.fn.call( hook.context );
 	}
 };

HelloWorld.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	dispatchObservers( this, this._observers.post, newState, oldState );
};

HelloWorld.prototype.teardown = HelloWorld.prototype.destroy = function destroy ( detach ) {
	this.fire( 'teardown' );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

var dispatchObservers = function dispatchObservers( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

		var callbacks = group[ key ];
		if ( !callbacks ) continue;

		for ( var i = 0; i < callbacks.length; i += 1 ) {
			var callback = callbacks[i];
			if ( callback.__calling ) continue;

			callback.__calling = true;
			callback.call( component, newValue, oldValue );
			callback.__calling = false;
		}
	}
}

function createElement( name ) {
	return document.createElement( name );
}

function detachNode( node ) {
	node.parentNode.removeChild( node );
}

function insertNode( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function createText( data ) {
	return document.createTextNode( data );
}

function appendNode( node, target ) {
	target.appendChild( node );
}

function noop() {}

function createComment() {
	return document.createComment( '' );
}

function teardownEach( iterations, detach, start ) {
	for ( var i = ( start || 0 ); i < iterations.length; i += 1 ) {
		iterations[i].teardown( detach );
	}
}

function addEventListener( node, event, handler ) {
	node.addEventListener ( event, handler, false );
}

function removeEventListener( node, event, handler ) {
	node.removeEventListener ( event, handler, false );
}

function dispatchObservers( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

		var callbacks = group[ key ];
		if ( !callbacks ) continue;

		for ( var i = 0; i < callbacks.length; i += 1 ) {
			var callback = callbacks[i];
			if ( callback.__calling ) continue;

			callback.__calling = true;
			callback.call( component, newValue, oldValue );
			callback.__calling = false;
		}
	}
}

return HelloWorld;

}());