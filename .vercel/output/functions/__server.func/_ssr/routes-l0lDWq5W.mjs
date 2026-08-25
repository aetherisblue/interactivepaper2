import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as List, t as X } from "../_libs/lucide-react.mjs";
import { i as Slot } from "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as katex } from "../_libs/katex.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-l0lDWq5W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
function TooltipContent({ className, children, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset,
		className: cn("z-50 max-w-xs rounded-md bg-ink px-3 py-2 font-sans text-xs leading-relaxed text-paper shadow-[var(--shadow-border)]", "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out", className),
		...props,
		children
	}) });
}
function HoverNote({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "cursor-help border-b border-dotted border-accent/50 text-inherit decoration-transparent",
			children
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: label })] });
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-[opacity,transform,background-color,box-shadow,color] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			outline: "bg-transparent text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "bg-transparent text-ink-soft hover:bg-paper-2 hover:text-ink",
			quiet: "bg-paper-2 text-ink-soft hover:bg-paper-3 hover:text-ink"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11 rounded-md",
			"icon-sm": "size-9 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var TOC = [
	{
		id: "abstract",
		n: null,
		title: "Abstract",
		depth: 0
	},
	{
		id: "s1",
		n: "1",
		title: "The finished matrix",
		depth: 1
	},
	{
		id: "s2",
		n: "2",
		title: "Energy pools",
		depth: 1
	},
	{
		id: "s3",
		n: "3",
		title: "The successful correspondence",
		depth: 1
	},
	{
		id: "s4",
		n: "4",
		title: "Approaches that did not work",
		depth: 1
	},
	{
		id: "s41",
		n: "4.1",
		title: "Explosive meeting",
		depth: 2
	},
	{
		id: "s42",
		n: "4.2",
		title: "Continuous interpolation",
		depth: 2
	},
	{
		id: "s43",
		n: "4.3",
		title: "Energy pools without frames",
		depth: 2
	},
	{
		id: "s44",
		n: "4.4",
		title: "Static lookup table",
		depth: 2
	},
	{
		id: "s45",
		n: "4.5",
		title: "Geometry too early",
		depth: 2
	},
	{
		id: "s5",
		n: "5",
		title: "Why the native-base reading succeeds",
		depth: 1
	},
	{
		id: "s6",
		n: "6",
		title: "Open directions",
		depth: 1
	},
	{
		id: "s7",
		n: "7",
		title: "Conclusion",
		depth: 1
	}
];
function Failure({ id, n, title, tried, failed, lesson }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "scroll-mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative pl-6 sm:pl-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-2 left-0 size-2.5 rounded-full bg-fail",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-5 bottom-0 left-[4px] w-px bg-rule",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-serif text-xl font-medium text-ink sm:text-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 font-sans text-sm font-medium text-fail tabular-nums",
						children: n
					}), title]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "paper-prose mt-4 pr-0 pb-10 sm:pr-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-2 font-sans text-xs font-medium tracking-wide text-muted uppercase",
							children: "What was tried"
						}),
						tried,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-5 rounded-lg bg-paper-2 px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mb-2 font-sans text-xs font-medium tracking-wide text-fail uppercase",
								children: "Why it failed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "[&_p]:mb-0",
								children: failed
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-2 font-sans text-xs font-medium tracking-wide text-muted uppercase",
							children: "What it left"
						}),
						lesson
					]
				})
			]
		})
	});
}
/** Pure dimensional meeting R(m,n) = n^n / m^m. */
function meeting(m, n) {
	return n ** n / m ** m;
}
function logBase(x, base) {
	return Math.log(x) / Math.log(base);
}
function pretty(x) {
	if (!Number.isFinite(x)) return "—";
	if (Math.abs(x) < 1e-15) return "0";
	if (Math.abs(x - 1) < 1e-12) return "1";
	if (Math.abs(x + 1) < 1e-12) return "−1";
	if (x < 0) return `−${pretty(-x)}`;
	const inv = 1 / x;
	if (x < 1 && Math.abs(inv - Math.round(inv)) < 1e-8 && inv > 1) return `1/${Math.round(inv)}`;
	if (Math.abs(x - Math.round(x)) < 1e-8 && Math.abs(x) < 0xe8d4a51000) return String(Math.round(x));
	if (x >= 1e6) return compactSci(x);
	return x.toPrecision(5).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
}
function compactSci(x) {
	const exp = Math.floor(Math.log10(x));
	return `${(x / 10 ** exp).toFixed(1)}e${exp}`;
}
/** Short label for matrix cells — avoids overflow at rank 6+. */
function cellLabel(x) {
	if (!Number.isFinite(x)) return "—";
	if (Math.abs(x - 1) < 1e-12) return "1";
	if (x > 0 && x < 1) {
		const inv = 1 / x;
		if (Math.abs(inv - Math.round(inv)) < 1e-8) {
			const n = Math.round(inv);
			return n >= 1e4 ? `1/${compactSci(n)}` : `1/${n}`;
		}
	}
	if (x >= 1e4) return compactSci(x);
	return pretty(x);
}
var FOREIGN_BASES = [
	{
		label: "e",
		value: Math.E
	},
	{
		label: "2",
		value: 2
	},
	{
		label: "10",
		value: 10
	}
];
function FigureFrame({ n, caption, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("my-8 overflow-hidden rounded-xl bg-paper-2 p-3 sm:p-4", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-lg bg-paper",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "mt-3 px-1 font-sans text-sm leading-relaxed text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-medium text-ink-soft",
				children: [
					"Figure ",
					n,
					". "
				]
			}), caption]
		})]
	});
}
function Tex({ children, i = false, numbered }) {
	const html = katex.renderToString(children, {
		displayMode: !i,
		throwOnError: false,
		trust: false,
		strict: "ignore"
	});
	if (i) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "[&_.katex]:text-[1.02em]",
		dangerouslySetInnerHTML: { __html: html }
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "eq",
		role: "img",
		"aria-label": children,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eq-body",
			dangerouslySetInnerHTML: { __html: html }
		}), numbered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "eq-num",
			children: [
				"(",
				numbered,
				")"
			]
		}) : null]
	});
}
var RANKS = [
	4,
	5,
	6,
	7
];
function MatrixFigure({ selected, onSelect }) {
	const [rank, setRank] = (0, import_react.useState)(6);
	const indices = (0, import_react.useMemo)(() => Array.from({ length: rank }, (_, i) => i + 1), [rank]);
	const logMax = Math.log(meeting(1, rank));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		n: "1",
		caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"The finished meeting matrix",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: String.raw`R(m,n)=n^{n}/m^{m}`
			}),
			" up to rank ",
			rank,
			". The diagonal is identically 1. Off-diagonal partners multiply to 1. Tap a cell to inspect its pools in Figure 2 and its native frame in Figure 3; its reciprocal partner is outlined."
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-3 sm:p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-wide text-muted uppercase",
					children: "Rank"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					children: RANKS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setRank(r);
							if (selected.m > r || selected.n > r) onSelect({
								m: 1,
								n: 2
							});
						},
						className: cn("flex h-9 min-w-9 items-center justify-center rounded-sm px-2 font-sans text-sm tabular-nums transition-colors duration-150", rank === r ? "bg-accent text-accent-fg" : "bg-paper-2 text-ink-soft hover:bg-paper-3"),
						children: r
					}, r))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[30rem] border-separate border-spacing-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "w-8 font-sans text-[0.65rem] font-medium tracking-wide text-faint uppercase",
						children: "m\\n"
					}), indices.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "font-sans text-xs font-medium text-muted tabular-nums",
						children: n
					}, n))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: indices.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pr-1 text-right font-sans text-xs font-medium text-muted tabular-nums",
						children: m
					}), indices.map((n) => {
						const r = meeting(m, n);
						const isSel = selected.m === m && selected.n === n;
						const isPartner = selected.m === n && selected.n === m;
						const t = m === n ? 0 : Math.min(1, Math.log(Math.max(r, 1 / r)) / logMax);
						const bg = `color-mix(in oklab, var(--color-accent) ${Math.round(t * 22)}%, var(--color-paper))`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onSelect({
									m,
									n
								}),
								title: `R(${m},${n}) = ${pretty(r)}`,
								className: cn("flex h-10 w-full min-w-12 items-center justify-center overflow-hidden rounded-sm px-0.5 font-sans text-[0.65rem] tabular-nums leading-none sm:h-11 sm:text-xs", "transition-[box-shadow,transform] duration-150 ease-out active:scale-[0.96]", isSel && "ring-2 ring-accent ring-offset-1 ring-offset-paper", isPartner && !isSel && "ring-1 ring-dashed ring-accent"),
								style: {
									background: bg,
									color: "var(--color-ink)"
								},
								children: cellLabel(r)
							})
						}, n);
					})] }, m)) })]
				})
			})]
		})
	});
}
function NativeFigure({ m, n }) {
	const r = meeting(m, n);
	const inv = 1 / r;
	const nativeOk = r > 0 && r !== 1 && Number.isFinite(r);
	const foreign = FOREIGN_BASES.map((b) => ({
		...b,
		plus: logBase(r, b.value),
		minus: logBase(inv, b.value)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FigureFrame, {
		n: "3",
		caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Native-base reading of the selected meeting",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `R(${m},${n})`
			}),
			". In base",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: pretty(r)
			}),
			" the pair sits at",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverNote, {
				label: "A number is one copy of itself in its own base: log_r(r) = 1. The reciprocal is the additive inverse of a logarithm, so log_r(1/r) = −1. Same unit, two orientations — the reciprocal identity, not the quotient 1/−1.",
				children: "+1 and −1"
			}),
			". Foreign bases leave a non-unit jump."
		] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-0 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 border-b border-rule p-4 sm:p-5 lg:border-r lg:border-b-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-medium tracking-wide text-muted uppercase",
							children: "Multiplicative register"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-sans text-xs text-faint tabular-nums",
							children: [
								"(",
								m,
								",",
								n,
								") ↔ (",
								n,
								",",
								m,
								")"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolCard, {
							label: `R(${m},${n})`,
							value: pretty(r),
							tone: "plus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolCard, {
							label: `R(${n},${m})`,
							value: pretty(inv),
							tone: "minus"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans text-sm leading-relaxed text-muted",
						children: [
							"Product",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-ink tabular-nums",
								children: [
									pretty(r),
									" × ",
									pretty(inv),
									" = ",
									pretty(r * inv)
								]
							}),
							". The two pools conserve the same energy: their meeting returns to 1."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-medium tracking-wide text-muted uppercase",
							children: "Native logarithmic register"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-sans text-xs text-faint",
							children: ["base ", pretty(r)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberLine, { enabled: nativeOk }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolCard, {
							label: "Native log of r",
							value: nativeOk ? "+1" : "—",
							tone: "plus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolCard, {
							label: "Native log of 1/r",
							value: nativeOk ? "−1" : "—",
							tone: "minus"
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-rule px-4 py-3 sm:px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-sans text-xs font-medium tracking-wide text-muted uppercase",
				children: "Same pair in foreign bases"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-64 text-left font-sans text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-xs tracking-wide text-faint uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: "Base"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: "log(r)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: "log(1/r)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: "Jump"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
						className: "tabular-nums text-ink-soft",
						children: [nativeOk && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "text-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5",
									children: pretty(r)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5",
									children: "1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5",
									children: "−1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5",
									children: "1"
								})
							]
						}), foreign.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-1.5",
								children: b.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-1.5",
								children: pretty(b.plus)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-1.5",
								children: pretty(b.minus)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-1.5",
								children: pretty(Math.abs(b.plus))
							})
						] }, b.label))]
					})]
				})
			})]
		})]
	});
}
function PoolCard({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-paper-2 px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "truncate font-sans text-[0.7rem] tracking-wide text-faint",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: tone === "plus" ? "mt-1 font-serif text-2xl text-ink" : "mt-1 font-serif text-2xl text-accent",
			children: value
		})]
	});
}
function NumberLine({ enabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-5 right-5 left-5 h-px bg-rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
				left: "50%",
				label: "0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
				left: "14%",
				label: "−1",
				disc: enabled ? "open" : void 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
				left: "86%",
				label: "+1",
				disc: enabled ? "filled" : void 0
			})
		]
	});
}
function Mark({ left, label, disc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "absolute top-3.5 flex -translate-x-1/2 flex-col items-center",
		style: { left },
		children: [disc === "filled" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "size-2.5 rounded-full bg-accent",
			"aria-hidden": true
		}) : disc === "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "size-2.5 rounded-full border-2 border-accent bg-paper",
			"aria-hidden": true
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-2 w-px bg-faint",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-3 font-sans text-[0.65rem] text-muted tabular-nums",
			children: label
		})]
	});
}
function PoolFigure({ m, n }) {
	const r = meeting(m, n);
	const inv = 1 / r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		n: "2",
		caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Complementary energy pools for the selected meeting",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `R(${m},${n})`
			}),
			". The filled pool holds the form",
			" ",
			pretty(r),
			"; the open pool holds its reciprocal. They are one meeting read from two sides: the product returns to 1."
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col items-center gap-5 px-4 py-6 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full max-w-md items-start justify-between gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolDisc, {
							filled: true,
							name: `R(${m},${n})`,
							value: pretty(r),
							address: `ranks ${m} and ${n}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col items-center pt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 h-px w-full bg-rule",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-3 font-sans text-[0.65rem] tracking-wide text-faint uppercase",
									children: "Reciprocal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-0.5 font-sans text-xs text-muted tabular-nums",
									children: ["product = ", pretty(r * inv)]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolDisc, {
							filled: false,
							name: `R(${n},${m})`,
							value: pretty(inv),
							address: `ranks ${n} and ${m}`
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto border-t border-rule px-4 py-3 sm:px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "paper-table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Separator" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Character" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "What energy does" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Addition" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Communication" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Shares between pools at the same kind of level" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Multiplication" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "A wall" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Must cross to move between different meetings" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Reciprocal" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Inversion" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Opens the complementary pool; product returns to 1" })
						] })
					] })]
				})
			})]
		})
	});
}
function PoolDisc({ filled, name, value, address }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-28 flex-col items-center text-center sm:w-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: filled ? "size-8 rounded-full bg-accent sm:size-9" : "size-8 rounded-full border-2 border-accent bg-paper sm:size-9",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-sans text-[0.7rem] tracking-wide text-faint",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 font-serif text-2xl text-ink",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 font-sans text-[0.7rem] text-muted",
				children: address
			})
		]
	});
}
function Article({ selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "paper-prose",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "abstract",
				className: "scroll-mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase",
					children: "Abstract"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[1.05rem] leading-[1.65] text-ink-soft sm:text-lg",
					children: [
						"The matrix of pure dimensional meetings",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(m,n)=n^{n}/m^{m}`
						}),
						" carries a simple but consequential internal correspondence: when any elementary entry",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "r"
						}),
						" is chosen as its own logarithmic base, the reciprocal pair ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`(r,1/r)`
						}),
						" becomes the unit additive step ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`(+1,-1)`
						}),
						". The matrix is first read as a catalogue of energy pools — finished meetings the underlying energy is allowed to occupy — before that correspondence is stated. This note develops both readings and, with equal care, records the principal approaches that were tried and discarded on the way to them. The failures are instructive; each one clarifies why the native-base reading is the minimal structure that actually works."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "running-rule my-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s1",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "1",
						title: "The finished matrix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "drop-cap",
						children: "We begin with the matrix whose entries are the pure meetings of complete dimensional scales:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "1",
						children: String.raw`R(m,n)=\dfrac{n^{n}}{m^{m}}.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Each index ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "k"
						}),
						" is a complete dimensional rank; the quantity ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						" is the native size of that rank. A matrix entry is therefore not an arbitrary ratio. It is the meeting of two finished scales: the scale of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "n"
						}),
						", measured in the scale of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "m"
						}),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The diagonal is identically 1. A rank meeting itself is a closed, normalized event; nothing is left over and nothing is owed. Every off-diagonal pair satisfies the reciprocal identity" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "2",
						children: String.raw`R(m,n)\cdot R(n,m)=1.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"This identity is not an extra axiom. It is the immediate consequence of the definition: the meeting of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "n"
						}),
						" with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "m"
						}),
						" ",
						"is the inverse of the meeting of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "m"
						}),
						" with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "n"
						}),
						". Energy, if we speak that way, is conserved across the pair because the pair is a single meeting read from two sides."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We treat this matrix as finished. All further structure is read from it rather than imposed upon it. In particular we do not enlarge the entries with towers, we do not interpolate them into a continuous group, and we do not decorate them with geometry until the algebraic skeleton is stable." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatrixFigure, {
						selected,
						onSelect
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s2",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "2",
						title: "Energy pools"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"An energy pool is a place the underlying energy is allowed to sit when it takes the form of an equation. It is not a new object besides the matrix. A pool ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "is" }),
						" a cell of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(m,n)`
						}),
						": a magnitude together with a dimensional address."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The running example is the meeting of rank 2 with rank 4.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(2,4)=4^{4}/2^{2}=64`
						}),
						" is one pool: energy sitting at that meeting, in the shape “64.”",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(4,2)=1/64`
						}),
						" is the complementary pool: same meeting, other side of the inversion. Together they conserve the energy, because"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "3",
						children: String.raw`64\cdot\frac{1}{64}=1.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The reciprocal does not create extra energy. It opens a complementary pool on the other side of an inversion. Equation (2) is this fact in general; (3) is the same fact at one cell." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pools are separated by operators, and the operators are not of one kind. Addition is ordinary communication: energy can share between pools at the same kind of level relatively freely (intra-field, same-level exchange). Multiplication is a wall: energy has to cross it to get from one pool to another (inter-field, a meeting across levels). The reciprocal is the special separator that creates the complementary pool while sending the product back to 1." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolFigure, {
						m: selected.m,
						n: selected.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This language is the working ontology of the note. What it does not yet supply is a unit in which motion between pools can be measured. That unit arrives in §3, when a pool is allowed to serve as its own logarithmic base. §4.3 records what happens if one keeps the pools and the operators but withholds the internal frame: the picture stays a metaphor." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s3",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "3",
						title: "The successful correspondence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Fix any positive entry ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`r=R(m,n)`
						}),
						" with",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`r\neq 1`
						}),
						". Taking the logarithm with base",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "r"
						}),
						" itself yields"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "4",
						children: String.raw`\log_{r}(r)=1,\qquad \log_{r}\bigl(\tfrac{1}{r}\bigr)=-1.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The multiplicative statement “product equals 1” is thereby translated into the additive statement “the two values form a unit step about zero.”" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The translation is not a change of meaning. It is a change of register. In the multiplicative register the pair occupies two complementary pools whose product is the identity. In the logarithmic register whose base is the pool itself, the same pair occupies two complementary unit displacements whose signed sum is zero." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Consequences follow at once." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "my-5 list-decimal space-y-3 pl-5 marker:font-sans marker:text-sm marker:text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Every elementary pool can serve as its own unit reference frame. The matrix is not measured from outside; it supplies a family of internal measuring sticks, one per entry." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"The elementary act of additive communication between a pool and its complement is identical with the reciprocal relation read in the matching base. There is no second primitive called “addition” that must be glued onto the reciprocal. The unit step",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "is" }),
								" the reciprocal, seen from inside."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Addition, as unit communication, and the reciprocal are two registers of the same underlying identity. Which one appears depends on the choice of frame, not on a change of ontology." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A short computation makes the tautology honest rather than empty. By definition" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "5",
						children: String.raw`\log_{r}(r)=\frac{\ln r}{\ln r}=1,\qquad \log_{r}\bigl(\tfrac{1}{r}\bigr)=\frac{\ln(1/r)}{\ln r}=-1.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The same arithmetic that guarantees",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`r\cdot(1/r)=1`
						}),
						" guarantees that the native logarithms are unit and opposite. What is not tautological is the structural claim: that this native frame is the correct internal coordinate system for the matrix, and that earlier attempts failed because they looked for a richer operation instead of this change of register."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The meeting of dimension 2 with dimension 4 is a useful running example.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(2,4)=4^{4}/2^{2}=256/4=64`
						}),
						", and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(4,2)=1/64`
						}),
						". In any foreign base the jump from the diagonal pool ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(2,2)=1`
						}),
						" to the 64-pool is a sizable displacement — about 4.159 in natural log, 6 in base 2, 1.806 in base 10. In base 64 the jump is exactly 1, and the complementary pool sits at −1. The costly-looking transition was an artefact of measuring the pools with a stick that did not belong to them."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeFigure, {
						m: selected.m,
						n: selected.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "When the logarithm base is chosen to be the pool value itself, the previously costly jump collapses into a clean additive step of exactly 1. The choice of base is therefore not a neutral change of units. It is the choice of which pool will serve as the shared reference frame for reading the others. When the reference frame is taken from inside the system, certain transitions simplify dramatically. The unit jump of ±1 is the logarithmic image of the fundamental reciprocal identity that always returns to 1." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s4",
				className: "scroll-mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					n: "4",
					title: "Approaches that did not work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The native-base reading is easy to state and, once seen, hard to unsee. It was not the first thing tried. The approaches below were pursued in earnest. Each failed for a definite reason. Recording the failures is part of the result: they bound the construction from the outside and show that the correspondence is not one more decoration on a pile of decorations." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s41",
				n: "4.1",
				title: "Explosive dimensional meeting as a binary operation",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"An early attempt defined a meeting operation on dimensional dual pairs by sending labels ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`(k,\ell)`
					}),
					" to the product ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`k\ell`
					}),
					" and then scaling by the full tower ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`(k\ell)^{k\ell}`
					}),
					". The hope was to obtain a binary composition law on meetings that would be dimensionally faithful: combining two ranks should produce the rank of their product, at the size of that product’s own complete scale."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The operation was dimensionally faithful. It was numerically catastrophic. After two or three iterations the normalized values underflowed to zero while the duals overflowed to infinity." })] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The growth rate of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`(k\ell)^{k\ell}`
					}),
					" ",
					"outruns any useful bookkeeping. The operation could not be iterated and therefore could not serve as a practical composition law. Logarithmic duals — recording the log of the tower rather than the tower itself — delayed the collapse by a single step. They did not remove the underlying violence. A composition law that cannot be applied twice is not a composition law."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dimensional fidelity is not a license for explosive encoding. The finished matrix already records complete meetings as ordinary ratios of complete scales. Nothing is gained by re-towering what has already been finished." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s42",
				n: "4.2",
				title: "Continuous interpolation of the explosive meeting",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"A continuous parameter ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: "t"
					}),
					" was introduced so that the discrete meeting became a path, and the derivative at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`t=0`
					}),
					" was computed. An explicit infinitesimal meeting rate was obtained. The construction was mathematically correct: the space of dual pairs can be given a smooth structure, and a directional derivative exists."
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The derivative remained a formal rate on an abstract space of dual pairs. It did not reconnect to the original matrix entries in a way that clarified energy movement or communication between concrete pools. One could write down the infinitesimal, but one could not point to a cell of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`R(m,n)`
					}),
					" and say what had been learned about it. The construction was conceptually downstream of the simpler native-base observation."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Existence of a derivative is not evidence that the continuous object is the right foundation. If the derivative does not speak back to the finished matrix, it is a neighboring theory, not a support for this one. Once native bases are in hand, the desire for an infinitesimal meeting rate looks like a request for extra structure that the discrete correspondence does not need." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s43",
				n: "4.3",
				title: "Energy pools without internal reference frames",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The language of §2 was first taken as a dynamics of operators rather than as a change of register. Energy occupies pools separated by addition (free communication), multiplication (a wall), and the reciprocal (an inversion that opens a complementary pool). The picture was evocative and already consistent with conservation via equation (2)." }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"It lacked a mechanism that could turn costly transitions into free ones. Inside the raw multiplicative numbers, even same-parity meetings such as ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`(2,2)\to(2,4)`
					}),
					" look expensive: the value jumps from 1 to 64. Without the ability to choose a native logarithmic base drawn from the matrix itself, the distinction between “wall” and “free communication” stayed absolute and external. One had two kinds of operator, declared by hand. The pools of §2 were in place; the unit in which they move was not."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A metaphor for operators is not a dynamics. Dynamics begin when a pool can furnish the unit in which motion is measured. The native base of §3 converts a multiplicative jump into a unit additive step and supplies precisely that missing internal mechanism. Operator character is frame-dependent: a transition that looks multiplicative in a foreign base can appear as ordinary unit communication in a native one. The pool picture survives; what failed was using it without frames." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s44",
				n: "4.4",
				title: "Treating the matrix as a static lookup table",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Several attempts used ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`R(m,n)`
					}),
					" merely as a dictionary of reference scales for embedding ordinary numbers. A datum would be expressed as a ratio against a chosen cell, and the cell would supply a “dimensional address.”"
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The approach never engaged the reciprocal identity as a generative relation, nor did it explain why logarithms of different bases produce qualitatively different communicative behavior. It remained a passive representational tool rather than an active structural account. Any table of positive numbers could have served the same embedding role; nothing about the construction used the fact that off-diagonal partners multiply to 1, or that",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`k^{k}`
					}),
					" is a complete scale."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A matrix that is only consulted is not yet a structure. The native-base correspondence uses the matrix as a source of frames, not as a list of constants." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s45",
				n: "4.5",
				title: "Forcing geometric interpretations too early",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Circles, loops, radii, and curvature were repeatedly tried as immediate readings of the scales",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`k^{k}`
					}),
					". The temptation is obvious: a complete scale wants to be a closed figure, a meeting wants to be an intersection, a reciprocal wants to be an inversion in a circle."
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Each geometric reading added interpretive load without clarifying the algebraic or energetic relations inside the matrix. One could draw a circle of circumference related to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`k^{k}`
					}),
					", but the drawing did not explain why ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`\log_{r}(r)=1`
					}),
					" is the right unit of communication, and it did not explain why the explosive meeting failed. Geometry was being asked to do the work of a change of register."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The native-base correspondence required no geometric commitment; it lives entirely at the level of the numerical and reciprocal structure. Geometry may later be recovered — a unit step about zero is not hostile to a picture of a directed loop — but it is not required for the observation, and introducing it first concealed the observation. Pictures that are not forced by the algebra are optional. Optional pictures should wait." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s5",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "5",
						title: "Why the native-base reading succeeds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The correspondence succeeds for a cluster of reasons that the failed approaches, taken together, make precise." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "my-5 list-disc space-y-2 pl-5 marker:text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "It stays inside the original matrix." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "It uses only the reciprocal identity that the matrix already possesses." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "It introduces no explosive auxiliary operation." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "It converts the multiplicative structure into additive unit communication by a change of reference frame that the matrix itself supplies." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "It therefore requires no external scaffolding and generates a concrete, iterable notion of elementary energy movement: the unit step." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A slightly sharper formulation: the native-base reading is a change of coordinates, not a new object. Failed approaches, in each case, added an object — a tower, a path, a metaphor, a dictionary, a circle — and then had to control it. The correspondence adds no object. It rereads an object that is already there." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Because the rereading is available at every positive off-diagonal entry, the matrix is equipped with a family of internal frames indexed by its own cells. Conservation remains visible in every such frame as perfect antisymmetry about zero. That is as much structure as the observation needs, and it is exactly as much as the matrix already had." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s6",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "6",
						title: "Open directions that remain legitimate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The following are not required for the correspondence, but they are well-posed now that the correspondence is in hand." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
						className: "font-medium text-ink",
						children: ["6.1 Classification of frames.", " "]
					}), "Every reciprocal pair is a unit step in its own base; the more interesting question is which foreign bases turn a given non-reciprocal transition into a small integer step. A systematic map of those simplifications would turn the single observation of §3 into a catalogue of internal unit communications."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
						className: "font-medium text-ink",
						children: ["6.2 Paths of successive unit steps.", " "]
					}), "A native step oscillates inside a pair. A non-native step, using a base drawn from another family, can land on a different pair. Sequences of such steps, each accompanied by an update of the native base, are a discrete dynamics on the set of meetings. Closed loops, hubs, and selection rules on rank change are open."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
						className: "font-medium text-ink",
						children: ["6.3 Higher meetings.", " "]
					}), "The matrix as written is two-index. Meetings of three or more complete scales, and the frames they induce, are not treated here. Whether a native-base unit still generates communication at those meetings is a precise question, not a slogan."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "font-medium text-ink",
							children: ["6.4 Geometry, later.", " "]
						}),
						"If geometry is to be reintroduced, it should be required by the unit-step structure rather than draped over the scales",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						". A directed unit step about zero already has a candidate picture; it should be earned, not assumed."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s7",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "7",
						title: "Conclusion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The reciprocal scale matrix contains, for every elementary entry, a natural logarithmic frame in which that entry and its complement become the unit of communication. Earlier approaches failed either by introducing uncontrollable growth, by remaining too formal, by lacking an internal reference mechanism, or by imposing external interpretations too soon. The native-base correspondence avoids each of these defects and rests directly on the reciprocal identity the matrix already carries." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The reciprocal is not merely a symmetry of the matrix. Once native bases are admitted, the reciprocal is the generator of the unit of communication itself." })
				]
			})
		]
	});
}
function SectionHead({ n, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
		className: "mb-5 font-serif text-2xl font-medium text-ink sm:text-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-3 font-sans text-sm font-medium text-muted tabular-nums sm:text-base",
			children: n
		}), title]
	});
}
function PaperShell() {
	const [selected, setSelected] = (0, import_react.useState)({
		m: 2,
		n: 4
	});
	const [active, setActive] = (0, import_react.useState)("abstract");
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const nodes = TOC.map((t) => document.getElementById(t.id)).filter((el) => Boolean(el));
		if (nodes.length === 0) return;
		const obs = new IntersectionObserver((entries) => {
			const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (vis[0]?.target.id) setActive(vis[0].target.id);
		}, {
			rootMargin: "-20% 0px -60% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		for (const n of nodes) obs.observe(n);
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 180,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-dvh bg-paper text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#abstract",
					className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
					children: "Skip to abstract"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "no-print sticky top-0 z-30 border-b border-rule/80 bg-paper/90 backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-sans text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase",
								children: "Reciprocal Scale Notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-serif text-sm text-ink",
								children: "Native Bases"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							className: "lg:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-controls": "toc-panel",
							children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" }), "Contents"]
						})]
					})
				}),
				open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					id: "toc-panel",
					className: "no-print border-b border-rule bg-paper-2 px-4 py-4 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocList, {
						active,
						onJump: () => setOpen(false)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[15rem_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "no-print hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto px-6 py-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 font-sans text-[0.65rem] font-medium tracking-[0.18em] text-faint uppercase",
								children: "Contents"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocList, { active })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						className: "px-4 pt-10 pb-24 sm:px-8 lg:px-12 lg:pt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Masthead, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Article, {
								selected,
								onSelect: setSelected
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-16 border-t border-rule pt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-sans text-sm leading-relaxed text-muted",
									children: [
										"A longer note on the internal structure of the reciprocal scale matrix. Figures 1–3 are live: choose a meeting in the matrix to see its complementary pools, then watch the native frame become the unit step ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-ink",
											children: "+1 / −1"
										}),
										"."
									]
								})
							})
						]
					})]
				})
			]
		})
	});
}
function Masthead() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xs font-medium tracking-[0.22em] text-accent uppercase",
				children: "A research note"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-serif text-[2.15rem] leading-[1.12] font-medium tracking-tight text-ink sm:text-5xl sm:leading-[1.08]",
				children: "Native Bases, Reciprocal Unit Steps, and the Approaches That Failed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl font-serif text-lg leading-snug text-muted italic sm:text-xl",
				children: "A longer note on the internal structure of the reciprocal scale matrix and the paths that did not lead here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reciprocal Scale Notes" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-faint",
						"aria-hidden": true,
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "§ Native frames" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "running-rule mt-8" })
		]
	});
}
function TocList({ active, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-0.5",
		children: TOC.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `#${item.id}`,
			onClick: onJump,
			className: cn("flex min-h-9 items-baseline gap-2 rounded-sm px-2 py-1.5 font-sans text-sm transition-colors duration-150", item.depth === 2 && "pl-6 text-[0.8125rem]", active === item.id ? "bg-paper-2 text-ink" : "text-muted hover:bg-paper-2/70 hover:text-ink"),
			children: [item.n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-7 shrink-0 text-faint tabular-nums",
				children: item.n
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-7 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "leading-snug",
				children: item.title
			})]
		}) }, item.id))
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperShell, {});
}
//#endregion
export { Home as component };
