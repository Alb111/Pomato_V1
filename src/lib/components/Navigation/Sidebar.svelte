<script lang="ts">
    type route= {
        name:String,
        link:String,
        image:string,
        selected:Boolean
    }
    let routes: route[] = [
        { name:"home", link:"/", selected:true, image:"../assets/time.png" },
        { name:"home", link:"/", selected:true, image:"" },
        { name:"home", link:"/", selected:true, image:"" }
    ]
</script>
<nav>
    {#each routes as route}
    <div>
        <img src={route.image} alt="not working">
    </div>
    {/each}
</nav>