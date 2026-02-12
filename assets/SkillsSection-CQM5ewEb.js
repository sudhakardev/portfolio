import{r as a,u as X,c as ot,a as ge,V as g,_ as me,D as Te,O as We,P as He,b as ve,R as at,I as lt,F as ze,d as pe,e as G,W as ct,B as xe,S as ke,f as dt,U as Oe,g as Ue,M as ft,h as $,i as ut,j as mt,L as pt,C as ht,k as Fe,l as o,m as gt,n as vt,o as J,p as xt,q as Z,s as yt}from"./index-BaQ9HQAo.js";import{P as bt}from"./PerspectiveCamera-DEN21kST.js";import{A as wt}from"./index-CSDkfEKL.js";const K=new g,ye=new g,St=new g,Ce=new ve;function Mt(s,e,t){const i=K.setFromMatrixPosition(s.matrixWorld);i.project(e);const n=t.width/2,r=t.height/2;return[i.x*n+n,-(i.y*r)+r]}function _t(s,e){const t=K.setFromMatrixPosition(s.matrixWorld),i=ye.setFromMatrixPosition(e.matrixWorld),n=t.sub(i),r=e.getWorldDirection(St);return n.angleTo(r)>Math.PI/2}function Et(s,e,t,i){const n=K.setFromMatrixPosition(s.matrixWorld),r=n.clone();r.project(e),Ce.set(r.x,r.y),t.setFromCamera(Ce,e);const c=t.intersectObjects(i,!0);if(c.length){const l=c[0].distance;return n.distanceTo(t.ray.origin)<l}return!0}function jt(s,e){if(e instanceof We)return e.zoom;if(e instanceof He){const t=K.setFromMatrixPosition(s.matrixWorld),i=ye.setFromMatrixPosition(e.matrixWorld),n=e.fov*Math.PI/180,r=t.distanceTo(i);return 1/(2*Math.tan(n/2)*r)}else return 1}function Lt(s,e,t){if(e instanceof He||e instanceof We){const i=K.setFromMatrixPosition(s.matrixWorld),n=ye.setFromMatrixPosition(e.matrixWorld),r=i.distanceTo(n),c=(t[1]-t[0])/(e.far-e.near),l=t[1]-c*e.far;return Math.round(c*r+l)}}const he=s=>Math.abs(s)<1e-10?0:s;function Ve(s,e,t=""){let i="matrix3d(";for(let n=0;n!==16;n++)i+=he(e[n]*s.elements[n])+(n!==15?",":")");return t+i}const Pt=(s=>e=>Ve(e,s))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),At=(s=>(e,t)=>Ve(e,s(t),"translate(-50%,-50%)"))(s=>[1/s,1/s,1/s,1,-1/s,-1/s,-1/s,-1,1/s,1/s,1/s,1,1,1,1,1]);function zt(s){return s&&typeof s=="object"&&"current"in s}const Ot=a.forwardRef(({children:s,eps:e=.001,style:t,className:i,prepend:n,center:r,fullscreen:c,portal:l,distanceFactor:p,sprite:v=!1,transform:u=!1,occlude:d,onOcclude:x,castShadow:A,receiveShadow:E,material:z,geometry:O,zIndexRange:S=[16777271,0],calculatePosition:N=Mt,as:f="div",wrapperClass:h,pointerEvents:q="auto",...U},Se)=>{const{gl:Me,camera:M,scene:_e,size:j,raycaster:Ye,events:Ze,viewport:Je}=X(),[_]=a.useState(()=>document.createElement(f)),ae=a.useRef(),P=a.useRef(null),Ee=a.useRef(0),ee=a.useRef([0,0]),Q=a.useRef(null),le=a.useRef(null),F=(l==null?void 0:l.current)||Ze.connected||Me.domElement.parentNode,R=a.useRef(null),te=a.useRef(!1),ne=a.useMemo(()=>d&&d!=="blending"||Array.isArray(d)&&d.length&&zt(d[0]),[d]);a.useLayoutEffect(()=>{const L=Me.domElement;d&&d==="blending"?(L.style.zIndex=`${Math.floor(S[0]/2)}`,L.style.position="absolute",L.style.pointerEvents="none"):(L.style.zIndex=null,L.style.position=null,L.style.pointerEvents=null)},[d]),a.useLayoutEffect(()=>{if(P.current){const L=ae.current=ot(_);if(_e.updateMatrixWorld(),u)_.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const m=N(P.current,M,j);_.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${m[0]}px,${m[1]}px,0);transform-origin:0 0;`}return F&&(n?F.prepend(_):F.appendChild(_)),()=>{F&&F.removeChild(_),L.unmount()}}},[F,u]),a.useLayoutEffect(()=>{h&&(_.className=h)},[h]);const je=a.useMemo(()=>u?{position:"absolute",top:0,left:0,width:j.width,height:j.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:r?"translate3d(-50%,-50%,0)":"none",...c&&{top:-j.height/2,left:-j.width/2,width:j.width,height:j.height},...t},[t,r,c,j,u]),Xe=a.useMemo(()=>({position:"absolute",pointerEvents:q}),[q]);a.useLayoutEffect(()=>{if(te.current=!1,u){var L;(L=ae.current)==null||L.render(a.createElement("div",{ref:Q,style:je},a.createElement("div",{ref:le,style:Xe},a.createElement("div",{ref:Se,className:i,style:t,children:s}))))}else{var m;(m=ae.current)==null||m.render(a.createElement("div",{ref:Se,style:je,className:i,children:s}))}});const V=a.useRef(!0);ge(L=>{if(P.current){M.updateMatrixWorld(),P.current.updateWorldMatrix(!0,!1);const m=u?ee.current:N(P.current,M,j);if(u||Math.abs(Ee.current-M.zoom)>e||Math.abs(ee.current[0]-m[0])>e||Math.abs(ee.current[1]-m[1])>e){const T=_t(P.current,M);let B=!1;ne&&(Array.isArray(d)?B=d.map(W=>W.current):d!=="blending"&&(B=[_e]));const Y=V.current;if(B){const W=Et(P.current,M,Ye,B);V.current=W&&!T}else V.current=!T;Y!==V.current&&(x?x(!V.current):_.style.display=V.current?"block":"none");const ie=Math.floor(S[0]/2),Ke=d?ne?[S[0],ie]:[ie-1,0]:S;if(_.style.zIndex=`${Lt(P.current,M,Ke)}`,u){const[W,Pe]=[j.width/2,j.height/2],ce=M.projectionMatrix.elements[5]*Pe,{isOrthographicCamera:Ae,top:et,left:tt,bottom:nt,right:it}=M,st=Pt(M.matrixWorldInverse),rt=Ae?`scale(${ce})translate(${he(-(it+tt)/2)}px,${he((et+nt)/2)}px)`:`translateZ(${ce}px)`;let H=P.current.matrixWorld;v&&(H=M.matrixWorldInverse.clone().transpose().copyPosition(H).scale(P.current.scale),H.elements[3]=H.elements[7]=H.elements[11]=0,H.elements[15]=1),_.style.width=j.width+"px",_.style.height=j.height+"px",_.style.perspective=Ae?"":`${ce}px`,Q.current&&le.current&&(Q.current.style.transform=`${rt}${st}translate(${W}px,${Pe}px)`,le.current.style.transform=At(H,1/((p||10)/400)))}else{const W=p===void 0?1:jt(P.current,M)*p;_.style.transform=`translate3d(${m[0]}px,${m[1]}px,0) scale(${W})`}ee.current=m,Ee.current=M.zoom}}if(!ne&&R.current&&!te.current)if(u){if(Q.current){const m=Q.current.children[0];if(m!=null&&m.clientWidth&&m!=null&&m.clientHeight){const{isOrthographicCamera:T}=M;if(T||O)U.scale&&(Array.isArray(U.scale)?U.scale instanceof g?R.current.scale.copy(U.scale.clone().divideScalar(1)):R.current.scale.set(1/U.scale[0],1/U.scale[1],1/U.scale[2]):R.current.scale.setScalar(1/U.scale));else{const B=(p||10)/400,Y=m.clientWidth*B,ie=m.clientHeight*B;R.current.scale.set(Y,ie,1)}te.current=!0}}}else{const m=_.children[0];if(m!=null&&m.clientWidth&&m!=null&&m.clientHeight){const T=1/Je.factor,B=m.clientWidth*T,Y=m.clientHeight*T;R.current.scale.set(B,Y,1),te.current=!0}R.current.lookAt(L.camera.position)}});const Le=a.useMemo(()=>({vertexShader:u?void 0:`
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
      `}),[u]);return a.createElement("group",me({},U,{ref:P}),d&&!ne&&a.createElement("mesh",{castShadow:A,receiveShadow:E,ref:R},O||a.createElement("planeGeometry",null),z||a.createElement("shaderMaterial",{side:Te,vertexShader:Le.vertexShader,fragmentShader:Le.fragmentShader})))}),Ge=parseInt(at.replace(/\D+/g,"")),$e=Ge>=125?"uv1":"uv2",De=new xe,se=new g;class be extends lt{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ze(e,3)),this.setAttribute("uv",new ze(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new pe(t,6,1);return this.setAttribute("instanceStart",new G(i,3,0)),this.setAttribute("instanceEnd",new G(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new pe(i,t*2,1);return this.setAttribute("instanceColorStart",new G(n,t,0)),this.setAttribute("instanceColorEnd",new G(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ct(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xe);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),De.setFromBufferAttribute(t),this.boundingBox.union(De))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ke),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,c=e.count;r<c;r++)se.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(se)),se.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(se));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class qe extends be{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,n=new Float32Array(2*i);if(t===3)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class we extends dt{constructor(e){super({type:"LineMaterial",uniforms:Oe.clone(Oe.merge([Ue.common,Ue.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ve(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${Ge>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const de=new $,Ie=new g,Be=new g,y=new $,b=new $,C=new $,fe=new g,ue=new mt,w=new pt,Ne=new g,re=new xe,oe=new ke,D=new $;let I,k;function Re(s,e,t){return D.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),D.multiplyScalar(1/D.w),D.x=k/t.width,D.y=k/t.height,D.applyMatrix4(s.projectionMatrixInverse),D.multiplyScalar(1/D.w),Math.abs(Math.max(D.x,D.y))}function Ut(s,e){const t=s.matrixWorld,i=s.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,c=Math.min(i.instanceCount,n.count);for(let l=0,p=c;l<p;l++){w.start.fromBufferAttribute(n,l),w.end.fromBufferAttribute(r,l),w.applyMatrix4(t);const v=new g,u=new g;I.distanceSqToSegment(w.start,w.end,u,v),u.distanceTo(v)<k*.5&&e.push({point:u,pointOnLine:v,distance:I.origin.distanceTo(u),object:s,face:null,faceIndex:l,uv:null,[$e]:null})}}function Ct(s,e,t){const i=e.projectionMatrix,r=s.material.resolution,c=s.matrixWorld,l=s.geometry,p=l.attributes.instanceStart,v=l.attributes.instanceEnd,u=Math.min(l.instanceCount,p.count),d=-e.near;I.at(1,C),C.w=1,C.applyMatrix4(e.matrixWorldInverse),C.applyMatrix4(i),C.multiplyScalar(1/C.w),C.x*=r.x/2,C.y*=r.y/2,C.z=0,fe.copy(C),ue.multiplyMatrices(e.matrixWorldInverse,c);for(let x=0,A=u;x<A;x++){if(y.fromBufferAttribute(p,x),b.fromBufferAttribute(v,x),y.w=1,b.w=1,y.applyMatrix4(ue),b.applyMatrix4(ue),y.z>d&&b.z>d)continue;if(y.z>d){const f=y.z-b.z,h=(y.z-d)/f;y.lerp(b,h)}else if(b.z>d){const f=b.z-y.z,h=(b.z-d)/f;b.lerp(y,h)}y.applyMatrix4(i),b.applyMatrix4(i),y.multiplyScalar(1/y.w),b.multiplyScalar(1/b.w),y.x*=r.x/2,y.y*=r.y/2,b.x*=r.x/2,b.y*=r.y/2,w.start.copy(y),w.start.z=0,w.end.copy(b),w.end.z=0;const z=w.closestPointToPointParameter(fe,!0);w.at(z,Ne);const O=ut.lerp(y.z,b.z,z),S=O>=-1&&O<=1,N=fe.distanceTo(Ne)<k*.5;if(S&&N){w.start.fromBufferAttribute(p,x),w.end.fromBufferAttribute(v,x),w.start.applyMatrix4(c),w.end.applyMatrix4(c);const f=new g,h=new g;I.distanceSqToSegment(w.start,w.end,h,f),t.push({point:h,pointOnLine:f,distance:I.origin.distanceTo(h),object:s,face:null,faceIndex:x,uv:null,[$e]:null})}}}class Qe extends ft{constructor(e=new be,t=new we({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let c=0,l=0,p=t.count;c<p;c++,l+=2)Ie.fromBufferAttribute(t,c),Be.fromBufferAttribute(i,c),n[l]=l===0?0:n[l-1],n[l+1]=n[l]+Ie.distanceTo(Be);const r=new pe(n,2,1);return e.setAttribute("instanceDistanceStart",new G(r,1,0)),e.setAttribute("instanceDistanceEnd",new G(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;I=e.ray;const c=this.matrixWorld,l=this.geometry,p=this.material;k=p.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),oe.copy(l.boundingSphere).applyMatrix4(c);let v;if(i)v=k*.5;else{const d=Math.max(n.near,oe.distanceToPoint(I.origin));v=Re(n,d,p.resolution)}if(oe.radius+=v,I.intersectsSphere(oe)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),re.copy(l.boundingBox).applyMatrix4(c);let u;if(i)u=k*.5;else{const d=Math.max(n.near,re.distanceToPoint(I.origin));u=Re(n,d,p.resolution)}re.expandByScalar(u),I.intersectsBox(re)!==!1&&(i?Ut(this,t):Ct(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(de),this.material.uniforms.resolution.value.set(de.z,de.w))}}class Dt extends Qe{constructor(e=new qe,t=new we({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const It=a.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:n,lineWidth:r,segments:c,dashed:l,...p},v){var u,d;const x=X(S=>S.size),A=a.useMemo(()=>c?new Qe:new Dt,[c]),[E]=a.useState(()=>new we),z=(i==null||(u=i[0])==null?void 0:u.length)===4?4:3,O=a.useMemo(()=>{const S=c?new be:new qe,N=e.map(f=>{const h=Array.isArray(f);return f instanceof g||f instanceof $?[f.x,f.y,f.z]:f instanceof ve?[f.x,f.y,0]:h&&f.length===3?[f[0],f[1],f[2]]:h&&f.length===2?[f[0],f[1],0]:f});if(S.setPositions(N.flat()),i){t=16777215;const f=i.map(h=>h instanceof ht?h.toArray():h);S.setColors(f.flat(),z)}return S},[e,c,i,z]);return a.useLayoutEffect(()=>{A.computeLineDistances()},[e,A]),a.useLayoutEffect(()=>{l?E.defines.USE_DASH="":delete E.defines.USE_DASH,E.needsUpdate=!0},[l,E]),a.useEffect(()=>()=>{O.dispose(),E.dispose()},[O]),a.createElement("primitive",me({object:A,ref:v},p),a.createElement("primitive",{object:O,attach:"geometry"}),a.createElement("primitive",me({object:E,attach:"material",color:t,vertexColors:!!i,resolution:[x.width,x.height],linewidth:(d=n??r)!==null&&d!==void 0?d:1,dashed:l,transparent:z===4},p)))}),Bt=[{name:"Python",ring:3,angle:0,category:"Logic Engineering",desc:"Primary tool for 300+ DSA problems"},{name:"Java",ring:3,angle:Math.PI/2,category:"Logic Engineering",desc:"Object-oriented systems architecture"},{name:"C",ring:3,angle:Math.PI,category:"Logic Engineering",desc:"Low-level memory management"},{name:"SQL",ring:3,angle:3*Math.PI/2,category:"Logic Engineering",desc:"PostgreSQL & MySQL master clusters"},{name:"LLM",ring:2,angle:Math.PI/4,category:"Neural Intelligence",desc:"Integration for Dental X-Ray diagnostics"},{name:"Flask",ring:2,angle:3*Math.PI/4,category:"Neural Intelligence",desc:"High-performance backend API design"},{name:"Django",ring:2,angle:5*Math.PI/4,category:"Neural Intelligence",desc:"Enterprise production scaling"},{name:"Deep Learning",ring:2,angle:7*Math.PI/4,category:"Neural Intelligence",desc:"CNNs and segmentation models"},{name:"Power BI",ring:1,angle:0,category:"Insight HUD",desc:"30% KPI delivery optimization"},{name:"Pandas",ring:1,angle:Math.PI,category:"Insight HUD",desc:"High-velocity dataset processing"},{name:"Alteryx",ring:1,angle:Math.PI/2,category:"Insight HUD",desc:"ETL workflow automation"}],Nt=Fe.memo(({text:s,revealed:e})=>{const[t,i]=a.useState(""),n="01";return a.useEffect(()=>{if(!e){i(s.split("").map(()=>n[Math.floor(Math.random()*2)]).join(""));return}let r=0;const c=setInterval(()=>{i(s.split("").map((l,p)=>p<Math.floor(r)?l:n[Math.floor(Math.random()*n.length)]).join("")),r>=s.length&&clearInterval(c),r+=.5},50);return()=>clearInterval(c)},[s,e]),o.jsx("span",{className:"font-mono",children:t})}),Rt=({skill:s})=>{var z;const e=a.useRef(null),[t,i]=a.useState(!1),{mouse:n,viewport:r,size:c}=X(),l=c.width<768,p=l?2.5:2.8,v=s.ring*p,u=l?.3:.35,d=.1/s.ring,x=a.useMemo(()=>new g,[]),A=a.useMemo(()=>new g,[]),E=a.useMemo(()=>new g,[]);return ge(O=>{if(!e.current)return;const S=O.clock.elapsedTime*d,N=Math.cos(S+s.angle)*v,f=Math.sin(S+s.angle)*v;x.set(N,0,f),A.set(n.x*r.width/2,n.y*r.height/2,0);const h=A.distanceTo(x),q=2.5;if(E.copy(x),h<q){const U=Math.pow(1-h/q,2)*1.2;E.lerp(A,U),t||i(!0)}else t&&i(!1);e.current.position.lerp(E,.1),e.current.lookAt(0,5,0)}),o.jsxs("group",{ref:e,children:[o.jsxs("mesh",{onPointerOver:()=>i(!0),onPointerOut:()=>i(!1),children:[o.jsx("sphereGeometry",{args:[u,24,24]}),o.jsx("meshStandardMaterial",{color:t?"#ffffff":"#00f2ff",emissive:"#00f2ff",emissiveIntensity:t?15:2,metalness:1,roughness:0})]}),t&&o.jsx(It,{points:[new g(0,0,0),new g(0,0,0).sub(((z=e.current)==null?void 0:z.position)||new g)],color:"#00f2ff",lineWidth:3,transparent:!0,opacity:.6}),o.jsx(Ot,{distanceFactor:l?15:10,position:[0,.5,0],center:!0,children:o.jsx("div",{className:"relative flex flex-col items-center",children:o.jsxs(wt,{children:[!t&&o.jsx(J.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full shadow-lg shadow-black/50",children:o.jsx("p",{className:"text-white font-black text-[10px] sm:text-xs uppercase tracking-widest whitespace-nowrap",children:o.jsx(Nt,{text:s.name,revealed:!0})})}),t&&o.jsxs(J.div,{initial:{opacity:0,scale:.8,y:30},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:30},className:"w-64 glass p-8 rounded-[2rem] border-2 border-primary shadow-[0_0_50px_rgba(0,242,255,0.3)] bg-black/80 backdrop-blur-2xl pointer-events-none",children:[o.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"}),o.jsx("p",{className:"text-[8px] font-mono text-primary font-bold tracking-[0.5em] uppercase mb-4",children:"Protocol_Decrypted"}),o.jsx("h4",{className:"text-white font-black text-2xl mb-3 tracking-tighter uppercase",children:s.name}),o.jsx("p",{className:"text-sm text-white/70 leading-relaxed font-light mb-6",children:s.desc}),o.jsx("div",{className:"h-1.5 w-full bg-white/10 rounded-full overflow-hidden",children:o.jsx(J.div,{initial:{width:0},animate:{width:"100%"},transition:{duration:.8},className:"h-full bg-primary"})})]})]})})})]})},Tt=Fe.memo(()=>{const{size:s}=X(),e=s.width<768,t=e?2.5:2.8;return o.jsx("group",{children:[1,2,3].map(i=>o.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[o.jsx("ringGeometry",{args:[i*t-.02,i*t+.02,e?32:64]}),o.jsx("meshBasicMaterial",{color:"#00f2ff",transparent:!0,opacity:.15,side:Te})]},i))})}),Wt=()=>{const s=a.useRef(null),{size:e}=X(),t=e.width<768,i=t?.8:1.4;return ge(n=>{s.current&&(s.current.rotation.y+=.008,s.current.rotation.x+=.004)}),o.jsxs("group",{children:[o.jsxs("mesh",{ref:s,children:[o.jsx("sphereGeometry",{args:[i,t?16:32,t?16:32]}),t?o.jsx("meshStandardMaterial",{color:"#00f2ff",emissive:"#00f2ff",emissiveIntensity:2,metalness:1,roughness:0}):o.jsx(vt,{color:"#00f2ff",speed:2,distort:.4,radius:1,emissive:"#00f2ff",emissiveIntensity:3,metalness:1})]}),o.jsx("pointLight",{position:[0,0,0],intensity:10,color:"#00f2ff",distance:15}),o.jsx(Tt,{}),Bt.map((n,r)=>o.jsx(Rt,{skill:n},r)),o.jsx("ambientLight",{intensity:.4}),o.jsx("spotLight",{position:[15,15,15],angle:.2,penumbra:1,intensity:2,color:"#00f2ff"})]})},Ht=()=>{const[s,e]=a.useState(!1);return a.useEffect(()=>{const t=()=>e(window.innerWidth<768);return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),o.jsx("div",{className:"h-[750px] md:h-[900px] w-full relative",children:o.jsxs(gt,{dpr:[1,1.5],performance:{min:.5},children:[o.jsx(bt,{makeDefault:!0,position:[0,s?14:6,s?26:20],fov:s?55:45}),o.jsx(Wt,{})]})})},Gt=()=>{const s=a.useRef(null),{scrollYProgress:e}=xt({target:s,offset:["start end","end start"]}),t=Z(e,[.75,.95],[1,0]),i=Z(e,[.75,.98],[1,.01]),n=Z(e,[.75,1],[0,300]);return o.jsxs("section",{id:"skills",ref:s,className:"relative overflow-hidden bg-[#020408] flex flex-col items-center pt-48 sm:pt-64 pb-24",children:[o.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#00f2ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f2ff08_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"}),o.jsx("div",{className:"container mx-auto px-4 relative z-20 text-center mb-12 sm:mb-20",children:o.jsx(yt,{children:o.jsx("div",{className:"inline-block",children:o.jsxs("div",{className:"flex items-center gap-4 justify-center",children:[o.jsx("div",{className:"w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(0,242,255,0.8)] animate-pulse"}),o.jsxs("h2",{className:"text-5xl md:text-[8rem] font-black tracking-tighter text-white uppercase italic leading-none",children:["ORBITAL ",o.jsx("span",{className:"text-glow-cyan",children:"DECRYPTION"})]})]})})})}),o.jsx(J.div,{style:{opacity:t,scale:i,y:n},className:"w-full relative z-10 flex justify-center",children:o.jsx(Ht,{})}),o.jsx(J.div,{style:{opacity:Z(e,[.9,.95,1],[0,1,0]),scale:Z(e,[.9,1],[0,10])},className:"absolute bottom-40 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full blur-2xl z-30 shadow-[0_0_100px_rgba(0,242,255,1)]"}),o.jsxs("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-20 w-full px-4",children:[o.jsx("div",{className:"px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-4 inline-block",children:o.jsx("p",{className:"text-[8px] sm:text-[10px] font-mono text-primary/80 uppercase tracking-[0.2em] sm:tracking-[0.4em]",children:"Interact to probe skill nodes // Decryption_Enabled"})}),o.jsx("div",{className:"w-1 h-12 bg-gradient-to-b from-primary to-transparent mx-auto rounded-full shadow-[0_0_20px_rgba(0,242,255,0.5)]"})]}),o.jsx("div",{className:"absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020408] to-transparent z-10"})]})};export{Gt as default};
