# Svelte Inject

A simple package to inject elements into other elements. Is so simple, that I can't call it a package really.

## Usage

If you just want to inject something into the body of the document, you can just do the following.

```svelte
<div use:inject>
	<!-- Anything really -->
</div>

<script>
import inject from "svelte-inject";
</script>
```

But! If you are extra adventurous, you can parse a CSS selection or a HTML node to inject it into that instead.

```svelte
<div use:inject={"main"}>
	<!-- Anything really -->
</div>

<script>
import inject from "svelte-inject";
</script>
```

