for i in {120..150}; do
  cat <<EOF > psalm$i.md
<img class="intro-right" src="art-paris-psalter.jpg">

<style>
  li {list-style-type: none;}
  p + ul {
    margin-top: -18px;
}
</style>

# Praying Through: Psalm $i

## The Psalm

>Psalm $i (CSB)  

## The Prayer
EOF
done