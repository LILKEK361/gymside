<script lang="ts">

    import {onMount} from "svelte";

    let names = ["sus"];
    let workouts;

    onMount( () => {
        workouts = {}
    })

    function createnewWorkout(){

    }

</script>

<div class="w-[100%] h-[100%]">
    <div class="w-[20%] h-[20%]">

        <details class="collapse bg-base-200">
            <summary class="collapse-title text-xl font-medium ">Create new Workout</summary>
            <div class="collapse-content">
                <ul>
                    <li><input type="text" placeholder="Workoutname"></li>
                    
                </ul>
            </div>
        </details>
    </div>
    <ul>
        {#each names as name}
            <li>{name}</li>
        {/each}
    </ul>

</div>