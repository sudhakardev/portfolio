import{r as a,u as X,c as rt,a as ge,V as g,_ as pe,D as Te,O as We,P as He,b as ve,R as ot,I as at,F as ze,d as he,e as G,W as lt,B as xe,S as ke,f as ct,U as Oe,g as Ue,M as dt,h as $,i as ft,j as ut,L as pt,C as ht,k as o,l as mt,m as gt,n as J,o as vt,p as Z,q as xt}from"./index-Dq74G1nx.js";import{P as yt}from"./PerspectiveCamera-DH-S7T5H.js";import{A as bt}from"./index-D71kBpfQ.js";const K=new g,ye=new g,wt=new g,Ce=new ve;function St(s,e,t){const i=K.setFromMatrixPosition(s.matrixWorld);i.project(e);const n=t.width/2,r=t.height/2;return[i.x*n+n,-(i.y*r)+r]}function Mt(s,e){const t=K.setFromMatrixPosition(s.matrixWorld),i=ye.setFromMatrixPosition(e.matrixWorld),n=t.sub(i),r=e.getWorldDirection(wt);return n.angleTo(r)>Math.PI/2}function _t(s,e,t,i){const n=K.setFromMatrixPosition(s.matrixWorld),r=n.clone();r.project(e),Ce.set(r.x,r.y),t.setFromCamera(Ce,e);const c=t.intersectObjects(i,!0);if(c.length){const l=c[0].distance;return n.distanceTo(t.ray.origin)<l}return!0}function Et(s,e){if(e instanceof We)return e.zoom;if(e instanceof He){const t=K.setFromMatrixPosition(s.matrixWorld),i=ye.setFromMatrixPosition(e.matrixWorld),n=e.fov*Math.PI/180,r=t.distanceTo(i);return 1/(2*Math.tan(n/2)*r)}else return 1}function Lt(s,e,t){if(e instanceof He||e instanceof We){const i=K.setFromMatrixPosition(s.matrixWorld),n=ye.setFromMatrixPosition(e.matrixWorld),r=i.distanceTo(n),c=(t[1]-t[0])/(e.far-e.near),l=t[1]-c*e.far;return Math.round(c*r+l)}}const me=s=>Math.abs(s)<1e-10?0:s;function Fe(s,e,t=""){let i="matrix3d(";for(let n=0;n!==16;n++)i+=me(e[n]*s.elements[n])+(n!==15?",":")");return t+i}const Pt=(s=>e=>Fe(e,s))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),jt=(s=>(e,t)=>Fe(e,s(t),"translate(-50%,-50%)"))(s=>[1/s,1/s,1/s,1,-1/s,-1/s,-1/s,-1,1/s,1/s,1/s,1,1,1,1,1]);function At(s){return s&&typeof s=="object"&&"current"in s}const zt=a.forwardRef(({children:s,eps:e=.001,style:t,className:i,prepend:n,center:r,fullscreen:c,portal:l,distanceFactor:h,sprite:v=!1,transform:u=!1,occlude:d,onOcclude:w,castShadow:I,receiveShadow:P,material:O,geometry:A,zIndexRange:S=[16777271,0],calculatePosition:B=St,as:f="div",wrapperClass:m,pointerEvents:q="auto",...z},Se)=>{const{gl:Me,camera:M,scene:_e,size:E,raycaster:Qe,events:Ye,viewport:Ze}=X(),[_]=a.useState(()=>document.createElement(f)),ae=a.useRef(),j=a.useRef(null),Ee=a.useRef(0),ee=a.useRef([0,0]),Q=a.useRef(null),le=a.useRef(null),F=(l==null?void 0:l.current)||Ye.connected||Me.domElement.parentNode,R=a.useRef(null),te=a.useRef(!1),ne=a.useMemo(()=>d&&d!=="blending"||Array.isArray(d)&&d.length&&At(d[0]),[d]);a.useLayoutEffect(()=>{const L=Me.domElement;d&&d==="blending"?(L.style.zIndex=`${Math.floor(S[0]/2)}`,L.style.position="absolute",L.style.pointerEvents="none"):(L.style.zIndex=null,L.style.position=null,L.style.pointerEvents=null)},[d]),a.useLayoutEffect(()=>{if(j.current){const L=ae.current=rt(_);if(_e.updateMatrixWorld(),u)_.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const p=B(j.current,M,E);_.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${p[0]}px,${p[1]}px,0);transform-origin:0 0;`}return F&&(n?F.prepend(_):F.appendChild(_)),()=>{F&&F.removeChild(_),L.unmount()}}},[F,u]),a.useLayoutEffect(()=>{m&&(_.className=m)},[m]);const Le=a.useMemo(()=>u?{position:"absolute",top:0,left:0,width:E.width,height:E.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:r?"translate3d(-50%,-50%,0)":"none",...c&&{top:-E.height/2,left:-E.width/2,width:E.width,height:E.height},...t},[t,r,c,E,u]),Je=a.useMemo(()=>({position:"absolute",pointerEvents:q}),[q]);a.useLayoutEffect(()=>{if(te.current=!1,u){var L;(L=ae.current)==null||L.render(a.createElement("div",{ref:Q,style:Le},a.createElement("div",{ref:le,style:Je},a.createElement("div",{ref:Se,className:i,style:t,children:s}))))}else{var p;(p=ae.current)==null||p.render(a.createElement("div",{ref:Se,style:Le,className:i,children:s}))}});const V=a.useRef(!0);ge(L=>{if(j.current){M.updateMatrixWorld(),j.current.updateWorldMatrix(!0,!1);const p=u?ee.current:B(j.current,M,E);if(u||Math.abs(Ee.current-M.zoom)>e||Math.abs(ee.current[0]-p[0])>e||Math.abs(ee.current[1]-p[1])>e){const T=Mt(j.current,M);let N=!1;ne&&(Array.isArray(d)?N=d.map(W=>W.current):d!=="blending"&&(N=[_e]));const Y=V.current;if(N){const W=_t(j.current,M,Qe,N);V.current=W&&!T}else V.current=!T;Y!==V.current&&(w?w(!V.current):_.style.display=V.current?"block":"none");const ie=Math.floor(S[0]/2),Xe=d?ne?[S[0],ie]:[ie-1,0]:S;if(_.style.zIndex=`${Lt(j.current,M,Xe)}`,u){const[W,je]=[E.width/2,E.height/2],ce=M.projectionMatrix.elements[5]*je,{isOrthographicCamera:Ae,top:Ke,left:et,bottom:tt,right:nt}=M,it=Pt(M.matrixWorldInverse),st=Ae?`scale(${ce})translate(${me(-(nt+et)/2)}px,${me((Ke+tt)/2)}px)`:`translateZ(${ce}px)`;let H=j.current.matrixWorld;v&&(H=M.matrixWorldInverse.clone().transpose().copyPosition(H).scale(j.current.scale),H.elements[3]=H.elements[7]=H.elements[11]=0,H.elements[15]=1),_.style.width=E.width+"px",_.style.height=E.height+"px",_.style.perspective=Ae?"":`${ce}px`,Q.current&&le.current&&(Q.current.style.transform=`${st}${it}translate(${W}px,${je}px)`,le.current.style.transform=jt(H,1/((h||10)/400)))}else{const W=h===void 0?1:Et(j.current,M)*h;_.style.transform=`translate3d(${p[0]}px,${p[1]}px,0) scale(${W})`}ee.current=p,Ee.current=M.zoom}}if(!ne&&R.current&&!te.current)if(u){if(Q.current){const p=Q.current.children[0];if(p!=null&&p.clientWidth&&p!=null&&p.clientHeight){const{isOrthographicCamera:T}=M;if(T||A)z.scale&&(Array.isArray(z.scale)?z.scale instanceof g?R.current.scale.copy(z.scale.clone().divideScalar(1)):R.current.scale.set(1/z.scale[0],1/z.scale[1],1/z.scale[2]):R.current.scale.setScalar(1/z.scale));else{const N=(h||10)/400,Y=p.clientWidth*N,ie=p.clientHeight*N;R.current.scale.set(Y,ie,1)}te.current=!0}}}else{const p=_.children[0];if(p!=null&&p.clientWidth&&p!=null&&p.clientHeight){const T=1/Ze.factor,N=p.clientWidth*T,Y=p.clientHeight*T;R.current.scale.set(N,Y,1),te.current=!0}R.current.lookAt(L.camera.position)}});const Pe=a.useMemo(()=>({vertexShader:u?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[u]);return a.createElement("group",pe({},z,{ref:j}),d&&!ne&&a.createElement("mesh",{castShadow:I,receiveShadow:P,ref:R},A||a.createElement("planeGeometry",null),O||a.createElement("shaderMaterial",{side:Te,vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader})))}),Ve=parseInt(ot.replace(/\D+/g,"")),Ge=Ve>=125?"uv1":"uv2",De=new xe,se=new g;class be extends at{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ze(e,3)),this.setAttribute("uv",new ze(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new he(t,6,1);return this.setAttribute("instanceStart",new G(i,3,0)),this.setAttribute("instanceEnd",new G(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new he(i,t*2,1);return this.setAttribute("instanceColorStart",new G(n,t,0)),this.setAttribute("instanceColorEnd",new G(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new lt(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xe);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),De.setFromBufferAttribute(t),this.boundingBox.union(De))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ke),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,c=e.count;r<c;r++)se.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(se)),se.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(se));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class $e extends be{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,n=new Float32Array(2*i);if(t===3)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class we extends ct{constructor(e){super({type:"LineMaterial",uniforms:Oe.clone(Oe.merge([Ue.common,Ue.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ve(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Ve>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const de=new $,Ie=new g,Be=new g,x=new $,y=new $,U=new $,fe=new g,ue=new ut,b=new pt,Ne=new g,re=new xe,oe=new ke,C=new $;let D,k;function Re(s,e,t){return C.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),C.multiplyScalar(1/C.w),C.x=k/t.width,C.y=k/t.height,C.applyMatrix4(s.projectionMatrixInverse),C.multiplyScalar(1/C.w),Math.abs(Math.max(C.x,C.y))}function Ot(s,e){const t=s.matrixWorld,i=s.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,c=Math.min(i.instanceCount,n.count);for(let l=0,h=c;l<h;l++){b.start.fromBufferAttribute(n,l),b.end.fromBufferAttribute(r,l),b.applyMatrix4(t);const v=new g,u=new g;D.distanceSqToSegment(b.start,b.end,u,v),u.distanceTo(v)<k*.5&&e.push({point:u,pointOnLine:v,distance:D.origin.distanceTo(u),object:s,face:null,faceIndex:l,uv:null,[Ge]:null})}}function Ut(s,e,t){const i=e.projectionMatrix,r=s.material.resolution,c=s.matrixWorld,l=s.geometry,h=l.attributes.instanceStart,v=l.attributes.instanceEnd,u=Math.min(l.instanceCount,h.count),d=-e.near;D.at(1,U),U.w=1,U.applyMatrix4(e.matrixWorldInverse),U.applyMatrix4(i),U.multiplyScalar(1/U.w),U.x*=r.x/2,U.y*=r.y/2,U.z=0,fe.copy(U),ue.multiplyMatrices(e.matrixWorldInverse,c);for(let w=0,I=u;w<I;w++){if(x.fromBufferAttribute(h,w),y.fromBufferAttribute(v,w),x.w=1,y.w=1,x.applyMatrix4(ue),y.applyMatrix4(ue),x.z>d&&y.z>d)continue;if(x.z>d){const f=x.z-y.z,m=(x.z-d)/f;x.lerp(y,m)}else if(y.z>d){const f=y.z-x.z,m=(y.z-d)/f;y.lerp(x,m)}x.applyMatrix4(i),y.applyMatrix4(i),x.multiplyScalar(1/x.w),y.multiplyScalar(1/y.w),x.x*=r.x/2,x.y*=r.y/2,y.x*=r.x/2,y.y*=r.y/2,b.start.copy(x),b.start.z=0,b.end.copy(y),b.end.z=0;const O=b.closestPointToPointParameter(fe,!0);b.at(O,Ne);const A=ft.lerp(x.z,y.z,O),S=A>=-1&&A<=1,B=fe.distanceTo(Ne)<k*.5;if(S&&B){b.start.fromBufferAttribute(h,w),b.end.fromBufferAttribute(v,w),b.start.applyMatrix4(c),b.end.applyMatrix4(c);const f=new g,m=new g;D.distanceSqToSegment(b.start,b.end,m,f),t.push({point:m,pointOnLine:f,distance:D.origin.distanceTo(m),object:s,face:null,faceIndex:w,uv:null,[Ge]:null})}}}class qe extends dt{constructor(e=new be,t=new we({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let c=0,l=0,h=t.count;c<h;c++,l+=2)Ie.fromBufferAttribute(t,c),Be.fromBufferAttribute(i,c),n[l]=l===0?0:n[l-1],n[l+1]=n[l]+Ie.distanceTo(Be);const r=new he(n,2,1);return e.setAttribute("instanceDistanceStart",new G(r,1,0)),e.setAttribute("instanceDistanceEnd",new G(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;D=e.ray;const c=this.matrixWorld,l=this.geometry,h=this.material;k=h.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),oe.copy(l.boundingSphere).applyMatrix4(c);let v;if(i)v=k*.5;else{const d=Math.max(n.near,oe.distanceToPoint(D.origin));v=Re(n,d,h.resolution)}if(oe.radius+=v,D.intersectsSphere(oe)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),re.copy(l.boundingBox).applyMatrix4(c);let u;if(i)u=k*.5;else{const d=Math.max(n.near,re.distanceToPoint(D.origin));u=Re(n,d,h.resolution)}re.expandByScalar(u),D.intersectsBox(re)!==!1&&(i?Ot(this,t):Ut(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(de),this.material.uniforms.resolution.value.set(de.z,de.w))}}class Ct extends qe{constructor(e=new $e,t=new we({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Dt=a.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:n,lineWidth:r,segments:c,dashed:l,...h},v){var u,d;const w=X(S=>S.size),I=a.useMemo(()=>c?new qe:new Ct,[c]),[P]=a.useState(()=>new we),O=(i==null||(u=i[0])==null?void 0:u.length)===4?4:3,A=a.useMemo(()=>{const S=c?new be:new $e,B=e.map(f=>{const m=Array.isArray(f);return f instanceof g||f instanceof $?[f.x,f.y,f.z]:f instanceof ve?[f.x,f.y,0]:m&&f.length===3?[f[0],f[1],f[2]]:m&&f.length===2?[f[0],f[1],0]:f});if(S.setPositions(B.flat()),i){t=16777215;const f=i.map(m=>m instanceof ht?m.toArray():m);S.setColors(f.flat(),O)}return S},[e,c,i,O]);return a.useLayoutEffect(()=>{I.computeLineDistances()},[e,I]),a.useLayoutEffect(()=>{l?P.defines.USE_DASH="":delete P.defines.USE_DASH,P.needsUpdate=!0},[l,P]),a.useEffect(()=>()=>{A.dispose(),P.dispose()},[A]),a.createElement("primitive",pe({object:I,ref:v},h),a.createElement("primitive",{object:A,attach:"geometry"}),a.createElement("primitive",pe({object:P,attach:"material",color:t,vertexColors:!!i,resolution:[w.width,w.height],linewidth:(d=n??r)!==null&&d!==void 0?d:1,dashed:l,transparent:O===4},h)))}),It=[{name:"Python",ring:3,angle:0,category:"Logic Engineering",desc:"Primary tool for 300+ DSA problems"},{name:"Java",ring:3,angle:Math.PI/2,category:"Logic Engineering",desc:"Object-oriented systems architecture"},{name:"C",ring:3,angle:Math.PI,category:"Logic Engineering",desc:"Low-level memory management"},{name:"SQL",ring:3,angle:3*Math.PI/2,category:"Logic Engineering",desc:"PostgreSQL & MySQL master clusters"},{name:"LLM",ring:2,angle:Math.PI/4,category:"Neural Intelligence",desc:"Integration for Dental X-Ray diagnostics"},{name:"Flask",ring:2,angle:3*Math.PI/4,category:"Neural Intelligence",desc:"High-performance backend API design"},{name:"Django",ring:2,angle:5*Math.PI/4,category:"Neural Intelligence",desc:"Enterprise production scaling"},{name:"Deep Learning",ring:2,angle:7*Math.PI/4,category:"Neural Intelligence",desc:"CNNs and segmentation models"},{name:"Power BI",ring:1,angle:0,category:"Insight HUD",desc:"30% KPI delivery optimization"},{name:"Pandas",ring:1,angle:Math.PI,category:"Insight HUD",desc:"High-velocity dataset processing"},{name:"Alteryx",ring:1,angle:Math.PI/2,category:"Insight HUD",desc:"ETL workflow automation"}],Bt=({text:s,revealed:e})=>{const[t,i]=a.useState(""),n="01";return a.useEffect(()=>{if(!e){i(s.split("").map(()=>n[Math.floor(Math.random()*2)]).join(""));return}let r=0;const c=setInterval(()=>{i(s.split("").map((l,h)=>h<r?l:n[Math.floor(Math.random()*n.length)]).join("")),r>=s.length&&clearInterval(c),r+=1/2},30);return()=>clearInterval(c)},[s,e]),o.jsx("span",{className:"font-mono",children:t})},Nt=({skill:s})=>{var w;const e=a.useRef(null),[t,i]=a.useState(!1),{mouse:n,viewport:r,size:c}=X(),l=c.width<768,h=l?1.6:2.8,v=s.ring*h,u=l?.22:.35,d=.1/s.ring;return ge(I=>{if(!e.current)return;const P=I.clock.elapsedTime*d,O=Math.cos(P+s.angle)*v,A=Math.sin(P+s.angle)*v,S=new g(O,0,A),B=new g(n.x*r.width/2,n.y*r.height/2,0),f=B.distanceTo(S),m=2.5,q=S.clone();if(f<m){const z=Math.pow(1-f/m,2)*1.2;q.lerp(B,z),t||i(!0)}else t&&i(!1);e.current.position.lerp(q,.1),e.current.lookAt(0,5,0)}),o.jsxs("group",{ref:e,children:[o.jsxs("mesh",{onPointerOver:()=>i(!0),onPointerOut:()=>i(!1),children:[o.jsx("sphereGeometry",{args:[u,24,24]}),o.jsx("meshStandardMaterial",{color:t?"#ffffff":"#00f2ff",emissive:"#00f2ff",emissiveIntensity:t?15:2,metalness:1,roughness:0})]}),t&&o.jsx(Dt,{points:[new g(0,0,0),new g(0,0,0).sub(((w=e.current)==null?void 0:w.position)||new g)],color:"#00f2ff",lineWidth:3,transparent:!0,opacity:.6}),o.jsx(zt,{distanceFactor:10,position:[0,0,0],center:!0,children:o.jsx("div",{className:"relative flex flex-col items-center",children:o.jsxs(bt,{children:[!t&&o.jsx(J.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full shadow-lg shadow-black/50",children:o.jsx("p",{className:"text-white font-black text-xs uppercase tracking-widest whitespace-nowrap",children:o.jsx(Bt,{text:s.name,revealed:!0})})}),t&&o.jsxs(J.div,{initial:{opacity:0,scale:.8,y:30},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:30},className:"w-64 glass p-8 rounded-[2rem] border-2 border-primary shadow-[0_0_50px_rgba(0,242,255,0.3)] bg-black/80 backdrop-blur-2xl pointer-events-none",children:[o.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"}),o.jsx("p",{className:"text-[8px] font-mono text-primary font-bold tracking-[0.5em] uppercase mb-4",children:"Protocol_Decrypted"}),o.jsx("h4",{className:"text-white font-black text-2xl mb-3 tracking-tighter uppercase",children:s.name}),o.jsx("p",{className:"text-sm text-white/70 leading-relaxed font-light mb-6",children:s.desc}),o.jsx("div",{className:"h-1.5 w-full bg-white/10 rounded-full overflow-hidden",children:o.jsx(J.div,{initial:{width:0},animate:{width:"100%"},transition:{duration:.8},className:"h-full bg-primary"})})]})]})})})]})},Rt=()=>{const{size:s}=X(),t=s.width<768?1.6:2.8;return o.jsx("group",{children:[1,2,3].map(i=>o.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[o.jsx("ringGeometry",{args:[i*t-.02,i*t+.02,64]}),o.jsx("meshBasicMaterial",{color:"#00f2ff",transparent:!0,opacity:.15,side:Te})]},i))})},Tt=()=>{const s=a.useRef(null),{size:e}=X(),i=e.width<768?.8:1.4;return ge(n=>{s.current&&(s.current.rotation.y+=.008,s.current.rotation.x+=.004)}),o.jsxs("group",{children:[o.jsxs("mesh",{ref:s,children:[o.jsx("sphereGeometry",{args:[i,32,32]}),o.jsx(gt,{color:"#00f2ff",speed:2,distort:.4,radius:1,emissive:"#00f2ff",emissiveIntensity:3,metalness:1})]}),o.jsx("pointLight",{position:[0,0,0],intensity:10,color:"#00f2ff",distance:15}),o.jsx(Rt,{}),It.map((n,r)=>o.jsx(Nt,{skill:n},r)),o.jsx("ambientLight",{intensity:.4}),o.jsx("spotLight",{position:[15,15,15],angle:.2,penumbra:1,intensity:2,color:"#00f2ff"})]})},Wt=()=>{const[s,e]=a.useState(!1);return a.useEffect(()=>{const t=()=>e(window.innerWidth<768);return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),o.jsx("div",{className:"h-[400px] md:h-[600px] w-full relative",children:o.jsxs(mt,{children:[o.jsx(yt,{makeDefault:!0,position:[0,s?3:4,s?12:15],fov:s?65:50}),o.jsx(Tt,{})]})})},Vt=()=>{const s=a.useRef(null),{scrollYProgress:e}=vt({target:s,offset:["start end","end start"]}),t=Z(e,[.75,.95],[1,0]),i=Z(e,[.75,.98],[1,.01]),n=Z(e,[.75,1],[0,300]);return o.jsxs("section",{id:"skills",ref:s,className:"relative overflow-hidden bg-[#020408] flex flex-col items-center pt-28 sm:pt-24 pb-12",children:[o.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#00f2ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f2ff08_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"}),o.jsx("div",{className:"container mx-auto px-4 relative z-20 text-center mb-2",children:o.jsx(xt,{children:o.jsx("div",{className:"inline-block",children:o.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[o.jsx("div",{className:"w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(0,242,255,0.8)] animate-pulse"}),o.jsxs("h2",{className:"text-3xl md:text-[6rem] font-black tracking-tighter text-white uppercase italic leading-none",children:["ORBITAL ",o.jsx("span",{className:"text-glow-cyan",children:"DECRYPTION"})]})]})})})}),o.jsx(J.div,{style:{opacity:t,scale:i,y:n},className:"w-full relative z-10 flex justify-center",children:o.jsx(Wt,{})}),o.jsx(J.div,{style:{opacity:Z(e,[.9,.95,1],[0,1,0]),scale:Z(e,[.9,1],[0,10])},className:"absolute bottom-40 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full blur-2xl z-30 shadow-[0_0_100px_rgba(0,242,255,1)]"}),o.jsxs("div",{className:"absolute bottom-20 left-1/2 -translate-x-1/2 text-center z-20",children:[o.jsx("div",{className:"px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6",children:o.jsx("p",{className:"text-[10px] font-mono text-primary/80 uppercase tracking-[0.4em]",children:"Interact to probe skill nodes // Decryption_Enabled"})}),o.jsx("div",{className:"w-1 h-20 bg-gradient-to-b from-primary to-transparent mx-auto rounded-full shadow-[0_0_20px_rgba(0,242,255,0.5)]"})]})]})};export{Vt as default};
