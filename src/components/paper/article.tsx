import { Failure } from "./failure";
import { MatrixFigure } from "./matrix-figure";
import { NativeFigure } from "./native-figure";
import { PoolFigure } from "./pool-figure";
import { ScaleFigure } from "./scale-figure";
import { Tex } from "./tex";

export function Article({
  selected,
  onSelect,
}: {
  selected: { m: number; n: number };
  onSelect: (cell: { m: number; n: number }) => void;
}) {
  return (
    <article className="paper-prose">
      <section id="abstract" className="scroll-mt-24">
        <p className="mb-3 font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Abstract
        </p>
        <p className="text-[1.05rem] leading-[1.65] text-ink-soft sm:text-lg">
          The matrix of pure dimensional meetings{" "}
          <Tex i>{String.raw`R(m,n)=n^{n}/m^{m}`}</Tex> carries a simple but
          consequential internal correspondence: when any elementary entry{" "}
          <Tex i>r</Tex> is chosen as its own logarithmic base, the reciprocal
          pair <Tex i>{String.raw`(r,1/r)`}</Tex> becomes the unit additive
          step <Tex i>{String.raw`(+1,-1)`}</Tex>. The plus on{" "}
          <Tex i>{String.raw`+1`}</Tex> marks a directed unit of communication,
          not the integer 1. Each such <Tex i>r</Tex> is the ratio of two
          finished exponential scales, not an arbitrary positive number. The
          matrix is first read as
          a catalogue of energy pools — finished meetings the underlying energy
          is allowed to occupy — before that correspondence is stated. This
          note develops both readings and, with equal care, records the
          principal approaches that were tried and discarded on the way to
          them. The failures are instructive; each one clarifies why the
          native-base reading is the minimal structure that actually works.
        </p>
      </section>

      <hr className="running-rule my-10" />

      <section id="s1" className="scroll-mt-24">
        <SectionHead n="1" title="The finished matrix" />
        <p className="drop-cap">
          We begin with the matrix whose entries are the pure meetings of
          complete dimensional scales:
        </p>
        <Tex numbered="1">{String.raw`R(m,n)=\dfrac{n^{n}}{m^{m}}.`}</Tex>
        <p>
          Each index <Tex i>k</Tex> is a complete dimensional rank; the
          quantity <Tex i>{String.raw`k^{k}`}</Tex> is the native size of that
          rank. A matrix entry is therefore not an arbitrary ratio. It is the
          meeting of two finished scales: the scale of <Tex i>n</Tex>, measured
          in the scale of <Tex i>m</Tex>.
        </p>
        <p>
          The diagonal is identically 1. A rank meeting itself is a closed,
          normalized event; nothing is left over and nothing is owed. Every
          off-diagonal pair satisfies the reciprocal identity
        </p>
        <Tex numbered="2">{String.raw`R(m,n)\cdot R(n,m)=1.`}</Tex>
        <p>
          This identity is not an extra axiom. It is the immediate consequence
          of the definition: the meeting of <Tex i>n</Tex> with <Tex i>m</Tex>{" "}
          is the inverse of the meeting of <Tex i>m</Tex> with <Tex i>n</Tex>.
          Energy, if we speak that way, is conserved across the pair because
          the pair is a single meeting read from two sides.
        </p>
        <p>
          We treat this matrix as finished. All further structure is read from
          it rather than imposed upon it. In particular we do not enlarge the
          entries with towers, we do not interpolate them into a continuous
          group, and we do not decorate them with geometry until the algebraic
          skeleton is stable.
        </p>
        <MatrixFigure selected={selected} onSelect={onSelect} />
      </section>

      <section id="s2" className="scroll-mt-24">
        <SectionHead n="2" title="Energy pools" />
        <p>
          An energy pool is a place the underlying energy is allowed to sit
          when it takes the form of an equation. It is not a new object besides
          the matrix. A pool <em>is</em> a cell of{" "}
          <Tex i>{String.raw`R(m,n)`}</Tex>: a magnitude together with a
          dimensional address.
        </p>
        <p>
          The running example is the meeting of rank 2 with rank 4.{" "}
          <Tex i>{String.raw`R(2,4)=4^{4}/2^{2}=64`}</Tex> is one pool: energy
          sitting at that meeting, in the shape “64.”{" "}
          <Tex i>{String.raw`R(4,2)=1/64`}</Tex> is the complementary pool:
          same meeting, other side of the inversion. Together they conserve the
          energy, because
        </p>
        <Tex numbered="3">{String.raw`64\cdot\frac{1}{64}=1.`}</Tex>
        <p>
          The reciprocal does not create extra energy. It opens a complementary
          pool on the other side of an inversion. Equation (2) is this fact in
          general; (3) is the same fact at one cell.
        </p>
        <p>
          Pools are separated by operators, and the operators are not of one
          kind. Addition is ordinary communication: energy can share between
          pools at the same kind of level relatively freely (intra-field,
          same-level exchange). Multiplication is a wall: energy has to cross
          it to get from one pool to another (inter-field, a meeting across
          levels). The reciprocal is the special separator that creates the
          complementary pool while sending the product back to 1.
        </p>
        <PoolFigure m={selected.m} n={selected.n} />
        <p>
          This language is the working ontology of the note. What it does not
          yet supply is why the magnitude in a pool is not a free number, nor
          a unit in which motion between pools can be measured. The origin of
          the magnitude is §3. The unit arrives in §4, when a pool is allowed
          to serve as its own logarithmic base. §5.3 records what happens if
          one keeps the pools and the operators but withholds the internal
          frame: the picture stays a metaphor.
        </p>
      </section>

      <section id="s3" className="scroll-mt-24">
        <SectionHead n="3" title="The ratio of two finished scales" />
        <p>
          An energy pool is a cell of the matrix. What fills the cell is not a
          free number. It is the ratio of two finished exponential scales.
        </p>
        <p>
          A complete dimensional scale is the pure power{" "}
          <Tex i>{String.raw`k^{k}`}</Tex>. The exponent equals the rank: the
          scale of 2 is <Tex i>{String.raw`2^{2}=4`}</Tex>, the scale of 4 is{" "}
          <Tex i>{String.raw`4^{4}=256`}</Tex>. Nothing is left partial. The
          matrix entry is the meeting of two such finished objects:
        </p>
        <Tex numbered="4">{String.raw`r=R(m,n)=\dfrac{n^{n}}{m^{m}}.`}</Tex>
        <p>
          So <Tex i>r</Tex> is <Tex i>{String.raw`n^{n}`}</Tex> measured in{" "}
          <Tex i>{String.raw`m^{m}`}</Tex>. Its reciprocal partner is the same
          meeting read the other way:{" "}
          <Tex i>{String.raw`1/r=m^{m}/n^{n}=R(n,m)`}</Tex>. The exponential
          is not decorative. It is what fills the pools.
        </p>
        <p>
          The elementary identity of a single rank is the same fact before any
          pair is formed:
        </p>
        <Tex numbered="5">{String.raw`n^{n}\cdot\dfrac{1}{n^{n}}=1.`}</Tex>
        <p>
          The matrix lifts that identity from one rank to every pair of ranks.
          Equation (2) is the lift; equation (5) is the seed. In either
          reading, the exponential and its inverse cancel. Nothing is left
          over. Conservation across a reciprocal pair is the cancellation of
          two finished scales, not an extra axiom.
        </p>
        <ScaleFigure m={selected.m} n={selected.n} />
        <p>
          The pure logarithmic identities of the next section,{" "}
          <Tex i>{String.raw`\log_{r}(r)=+1`}</Tex> and{" "}
          <Tex i>{String.raw`\log_{r}(1/r)=-1`}</Tex>, hold for any positive{" "}
          <Tex i>{String.raw`r\neq 1`}</Tex>. They are not unique to the
          matrix. What is unique is the origin of <Tex i>r</Tex>:
        </p>
        <ul className="my-5 list-disc space-y-2 pl-5 marker:text-accent">
          <li>
            <Tex i>r</Tex> is not an arbitrary positive number.
          </li>
          <li>
            It is a ratio of two finished exponential scales{" "}
            <Tex i>{String.raw`n^{n}`}</Tex> and{" "}
            <Tex i>{String.raw`m^{m}`}</Tex>.
          </li>
          <li>
            Therefore the unit step <Tex i>{String.raw`+1,-1`}</Tex> is a
            reading of a dimensional meeting, not a free-floating change of
            units.
          </li>
        </ul>
        <p>
          The layers stack without remainder. The exponential{" "}
          <Tex i>{String.raw`k^{k}`}</Tex> fills the pool. The ratio{" "}
          <Tex i>{String.raw`n^{n}/m^{m}`}</Tex> is the meeting. The product{" "}
          <Tex i>{String.raw`r\cdot(1/r)=1`}</Tex> is conservation in the
          multiplicative register. The native logarithm of §4 is that same
          conservation read as a unit step. Each layer is a change of register
          on an object the previous layer already supplied.
        </p>
      </section>

      <section id="s4" className="scroll-mt-24">
        <SectionHead n="4" title="The successful correspondence" />
        <p>
          The <Tex i>r</Tex> of §3 is now in hand: a ratio of two finished
          scales, not an arbitrary positive number. For{" "}
          <Tex i>{String.raw`r\neq 1`}</Tex>, taking the logarithm with base{" "}
          <Tex i>r</Tex> itself yields
        </p>
        <Tex numbered="6">{String.raw`\log_{r}(r)=+1,\qquad \log_{r}\bigl(\tfrac{1}{r}\bigr)=-1.`}</Tex>
        <p>
          The multiplicative statement “product equals 1” is thereby translated
          into the additive statement “the two values form a unit step about
          zero.” The plus on <Tex i>{String.raw`+1`}</Tex> is the step itself:
          one unit of communication in the pool’s own base.{" "}
          <Tex i>{String.raw`-1`}</Tex> is the same unit, reversed. They are
          orientations of one step, not the integer 1 and its negative written
          for bookkeeping.
        </p>
        <p>
          The translation is not a change of meaning. It is a change of
          register. In the multiplicative register the pair occupies two
          complementary pools whose product is the identity. In the logarithmic
          register whose base is the pool itself, the same pair occupies two
          complementary unit displacements whose signed sum is zero.
        </p>
        <p>Consequences follow at once.</p>
        <ol className="my-5 list-decimal space-y-3 pl-5 marker:font-sans marker:text-sm marker:text-muted">
          <li>
            Every elementary pool can serve as its own unit reference frame.
            The matrix is not measured from outside; it supplies a family of
            internal measuring sticks, one per entry.
          </li>
          <li>
            The elementary act of additive communication between a pool and its
            complement is identical with the reciprocal relation read in the
            matching base. There is no second primitive called “addition” that
            must be glued onto the reciprocal. The unit step{" "}
            <em>is</em> the reciprocal, seen from inside.
          </li>
          <li>
            Addition, as unit communication, and the reciprocal are two
            registers of the same underlying identity. Which one appears
            depends on the choice of frame, not on a change of ontology.
          </li>
        </ol>
        <p>
          A short computation makes the tautology honest rather than empty. By
          definition
        </p>
        <Tex numbered="7">{String.raw`\log_{r}(r)=\frac{\ln r}{\ln r}=+1,\qquad \log_{r}\bigl(\tfrac{1}{r}\bigr)=\frac{\ln(1/r)}{\ln r}=-1.`}</Tex>
        <p>
          The same arithmetic that guarantees{" "}
          <Tex i>{String.raw`r\cdot(1/r)=1`}</Tex> guarantees that the native
          logarithms are a unit step and its reverse. What is not tautological
          is the structural claim: that this native frame is the correct
          internal coordinate system for the matrix, and that earlier attempts
          failed because they looked for a richer operation instead of this
          change of register.
        </p>
        <p>
          The meeting of dimension 2 with dimension 4 is a useful running
          example.{" "}
          <Tex i>{String.raw`R(2,4)=4^{4}/2^{2}=256/4=64`}</Tex>, and{" "}
          <Tex i>{String.raw`R(4,2)=1/64`}</Tex>. In any foreign base the jump
          from the diagonal pool <Tex i>{String.raw`R(2,2)=1`}</Tex> to the
          64-pool is a sizable displacement — about 4.159 in natural log, 6 in
          base 2, 1.806 in base 10. In base 64 the jump is exactly{" "}
          <Tex i>{String.raw`+1`}</Tex>, and the complementary pool sits at{" "}
          <Tex i>{String.raw`-1`}</Tex>. The costly-looking transition was an
          artefact of measuring the pools with a stick that did not belong to
          them.
        </p>
        <NativeFigure m={selected.m} n={selected.n} />
        <p>
          When the logarithm base is chosen to be the pool value itself, the
          previously costly jump collapses into a unit step of{" "}
          <Tex i>{String.raw`+1`}</Tex> (and its reverse{" "}
          <Tex i>{String.raw`-1`}</Tex>). The choice of base is therefore not
          a neutral change of units. It is the choice of which pool will serve
          as the shared reference frame for reading the others. When the
          reference frame is taken from inside the system, certain transitions
          simplify dramatically. The unit step{" "}
          <Tex i>{String.raw`+1,-1`}</Tex> is the logarithmic image of the
          fundamental reciprocal identity that always returns to 1.
        </p>
      </section>

      <section id="s5" className="scroll-mt-24">
        <SectionHead n="5" title="Approaches that did not work" />
        <p>
          The native-base reading is easy to state and, once seen, hard to
          unsee. It was not the first thing tried. The approaches below were
          pursued in earnest. Each failed for a definite reason. Recording the
          failures is part of the result: they bound the construction from the
          outside and show that the correspondence is not one more decoration
          on a pile of decorations.
        </p>
      </section>

      <Failure
        id="s51"
        n="5.1"
        title="Explosive dimensional meeting as a binary operation"
        tried={
          <>
            <p>
              An early attempt defined a meeting operation on dimensional dual
              pairs by sending labels <Tex i>{String.raw`(k,\ell)`}</Tex> to
              the product <Tex i>{String.raw`k\ell`}</Tex> and then scaling by
              the full tower <Tex i>{String.raw`(k\ell)^{k\ell}`}</Tex>. The
              hope was to obtain a binary composition law on meetings that
              would be dimensionally faithful: combining two ranks should
              produce the rank of their product, at the size of that product’s
              own complete scale.
            </p>
            <p>
              The operation was dimensionally faithful. It was numerically
              catastrophic. After two or three iterations the normalized values
              underflowed to zero while the duals overflowed to infinity.
            </p>
          </>
        }
        failed={
          <p>
            The growth rate of <Tex i>{String.raw`(k\ell)^{k\ell}`}</Tex>{" "}
            outruns any useful bookkeeping. The operation could not be iterated
            and therefore could not serve as a practical composition law.
            Logarithmic duals — recording the log of the tower rather than the
            tower itself — delayed the collapse by a single step. They did not
            remove the underlying violence. A composition law that cannot be
            applied twice is not a composition law.
          </p>
        }
        lesson={
          <p>
            Dimensional fidelity is not a license for explosive encoding. The
            finished matrix already records complete meetings as ordinary
            ratios of complete scales. Nothing is gained by re-towering what
            has already been finished.
          </p>
        }
      />

      <Failure
        id="s52"
        n="5.2"
        title="Continuous interpolation of the explosive meeting"
        tried={
          <p>
            A continuous parameter <Tex i>t</Tex> was introduced so that the
            discrete meeting became a path, and the derivative at{" "}
            <Tex i>{String.raw`t=0`}</Tex> was computed. An explicit
            infinitesimal meeting rate was obtained. The construction was
            mathematically correct: the space of dual pairs can be given a
            smooth structure, and a directional derivative exists.
          </p>
        }
        failed={
          <p>
            The derivative remained a formal rate on an abstract space of dual
            pairs. It did not reconnect to the original matrix entries in a way
            that clarified energy movement or communication between concrete
            pools. One could write down the infinitesimal, but one could not
            point to a cell of <Tex i>{String.raw`R(m,n)`}</Tex> and say what
            had been learned about it. The construction was conceptually
            downstream of the simpler native-base observation.
          </p>
        }
        lesson={
          <p>
            Existence of a derivative is not evidence that the continuous
            object is the right foundation. If the derivative does not speak
            back to the finished matrix, it is a neighboring theory, not a
            support for this one. Once native bases are in hand, the desire for
            an infinitesimal meeting rate looks like a request for extra
            structure that the discrete correspondence does not need.
          </p>
        }
      />

      <Failure
        id="s53"
        n="5.3"
        title="Energy pools without internal reference frames"
        tried={
          <p>
            The language of §2 was first taken as a dynamics of operators
            rather than as a change of register. Energy occupies pools
            separated by addition (free communication), multiplication (a
            wall), and the reciprocal (an inversion that opens a complementary
            pool). The picture was evocative and already consistent with
            conservation via equation (2).
          </p>
        }
        failed={
          <p>
            It lacked a mechanism that could turn costly transitions into free
            ones. Inside the raw multiplicative numbers, even same-parity
            meetings such as <Tex i>{String.raw`(2,2)\to(2,4)`}</Tex> look
            expensive: the value jumps from 1 to 64. Without the ability to
            choose a native logarithmic base drawn from the matrix itself, the
            distinction between “wall” and “free communication” stayed absolute
            and external. One had two kinds of operator, declared by hand. The
            pools of §2 were in place; the unit in which they move was not.
          </p>
        }
        lesson={
          <p>
            A metaphor for operators is not a dynamics. Dynamics begin when a
            pool can furnish the unit in which motion is measured. The native
            base of §4 converts a multiplicative jump into a unit additive
            step and supplies precisely that missing internal mechanism.
            Operator character is frame-dependent: a transition that looks
            multiplicative in a foreign base can appear as ordinary unit
            communication in a native one. The pool picture survives; what
            failed was using it without frames.
          </p>
        }
      />

      <Failure
        id="s54"
        n="5.4"
        title="Treating the matrix as a static lookup table"
        tried={
          <p>
            Several attempts used <Tex i>{String.raw`R(m,n)`}</Tex> merely as a
            dictionary of reference scales for embedding ordinary numbers. A
            datum would be expressed as a ratio against a chosen cell, and the
            cell would supply a “dimensional address.”
          </p>
        }
        failed={
          <p>
            The approach never engaged the reciprocal identity as a generative
            relation, nor did it explain why logarithms of different bases
            produce qualitatively different communicative behavior. It remained
            a passive representational tool rather than an active structural
            account. Any table of positive numbers could have served the same
            embedding role; nothing about the construction used the fact that
            off-diagonal partners multiply to 1, or that{" "}
            <Tex i>{String.raw`k^{k}`}</Tex> is a complete scale.
          </p>
        }
        lesson={
          <p>
            A matrix that is only consulted is not yet a structure. The
            native-base correspondence uses the matrix as a source of frames,
            not as a list of constants.
          </p>
        }
      />

      <Failure
        id="s55"
        n="5.5"
        title="Forcing geometric interpretations too early"
        tried={
          <p>
            Circles, loops, radii, and curvature were repeatedly tried as
            immediate readings of the scales{" "}
            <Tex i>{String.raw`k^{k}`}</Tex>. The temptation is obvious: a
            complete scale wants to be a closed figure, a meeting wants to be
            an intersection, a reciprocal wants to be an inversion in a circle.
          </p>
        }
        failed={
          <p>
            Each geometric reading added interpretive load without clarifying
            the algebraic or energetic relations inside the matrix. One could
            draw a circle of circumference related to{" "}
            <Tex i>{String.raw`k^{k}`}</Tex>, but the drawing did not explain
            why <Tex i>{String.raw`\log_{r}(r)=+1`}</Tex> is the right unit of
            communication, and it did not explain why the explosive meeting
            failed. Geometry was being asked to do the work of a change of
            register.
          </p>
        }
        lesson={
          <p>
            The native-base correspondence required no geometric commitment; it
            lives entirely at the level of the numerical and reciprocal
            structure. Geometry may later be recovered — a unit step about zero
            is not hostile to a picture of a directed loop — but it is not
            required for the observation, and introducing it first concealed
            the observation. Pictures that are not forced by the algebra are
            optional. Optional pictures should wait.
          </p>
        }
      />

      <section id="s6" className="scroll-mt-24">
        <SectionHead n="6" title="Why the native-base reading succeeds" />
        <p>
          The correspondence succeeds for a cluster of reasons that the failed
          approaches, taken together, make precise.
        </p>
        <ul className="my-5 list-disc space-y-2 pl-5 marker:text-accent">
          <li>It stays inside the original matrix.</li>
          <li>
            It uses only the reciprocal identity that the matrix already
            possesses.
          </li>
          <li>It introduces no explosive auxiliary operation.</li>
          <li>
            It converts the multiplicative structure into additive unit
            communication by a change of reference frame that the matrix itself
            supplies.
          </li>
          <li>
            It therefore requires no external scaffolding and generates a
            concrete, iterable notion of elementary energy movement: the unit
            step.
          </li>
        </ul>
        <p>
          A slightly sharper formulation: the native-base reading is a change
          of coordinates, not a new object. Failed approaches, in each case,
          added an object — a tower, a path, a metaphor, a dictionary, a circle
          — and then had to control it. The correspondence adds no object. It
          rereads an object that is already there.
        </p>
        <p>
          Because the rereading is available at every positive off-diagonal
          entry, the matrix is equipped with a family of internal frames
          indexed by its own cells. Conservation remains visible in every such
          frame as perfect antisymmetry about zero. That is as much structure
          as the observation needs, and it is exactly as much as the matrix
          already had.
        </p>
      </section>

      <section id="s7" className="scroll-mt-24">
        <SectionHead n="7" title="Open directions that remain legitimate" />
        <p>
          The following are not required for the correspondence, but they are
          well-posed now that the correspondence is in hand.
        </p>
        <p>
          <strong className="font-medium text-ink">
            7.1 Classification of frames.{" "}
          </strong>
          Every reciprocal pair is a unit step in its own base; the more
          interesting question is which foreign bases turn a given
          non-reciprocal transition into a small integer step. A systematic map
          of those simplifications would turn the single observation of §4 into
          a catalogue of internal unit communications.
        </p>
        <p>
          <strong className="font-medium text-ink">
            7.2 Paths of successive unit steps.{" "}
          </strong>
          A native step oscillates inside a pair. A non-native step, using a
          base drawn from another family, can land on a different pair.
          Sequences of such steps, each accompanied by an update of the native
          base, are a discrete dynamics on the set of meetings. Closed loops,
          hubs, and selection rules on rank change are open.
        </p>
        <p>
          <strong className="font-medium text-ink">
            7.3 Higher meetings.{" "}
          </strong>
          The matrix as written is two-index. Meetings of three or more
          complete scales, and the frames they induce, are not treated here.
          Whether a native-base unit still generates communication at those
          meetings is a precise question, not a slogan.
        </p>
        <p>
          <strong className="font-medium text-ink">
            7.4 Geometry, later.{" "}
          </strong>
          If geometry is to be reintroduced, it should be required by the
          unit-step structure rather than draped over the scales{" "}
          <Tex i>{String.raw`k^{k}`}</Tex>. A directed unit step about zero
          already has a candidate picture; it should be earned, not assumed.
        </p>
      </section>

      <section id="s8" className="scroll-mt-24">
        <SectionHead n="8" title="Conclusion" />
        <p>
          The reciprocal scale matrix contains, for every elementary entry, a
          natural logarithmic frame in which that entry and its complement
          become the unit of communication. Earlier approaches failed either by
          introducing uncontrollable growth, by remaining too formal, by
          lacking an internal reference mechanism, or by imposing external
          interpretations too soon. The native-base correspondence avoids each
          of these defects and rests directly on the reciprocal identity the
          matrix already carries.
        </p>
        <p>
          The reciprocal is not merely a symmetry of the matrix. Once native
          bases are admitted, the reciprocal is the generator of the unit of
          communication itself.
        </p>
      </section>
    </article>
  );
}

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <h2 className="mb-5 font-serif text-2xl font-medium text-ink sm:text-3xl">
      <span className="mr-3 font-sans text-sm font-medium text-muted tabular-nums sm:text-base">
        {n}
      </span>
      {title}
    </h2>
  );
}
