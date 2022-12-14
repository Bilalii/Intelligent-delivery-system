function Population(p, m, num) {
    this.population;                   // Array to hold the current population
    this.matingPool;                   // ArrayList which we will use for our "mating pool"
    this.generations = 0;              // Number of generations
    this.finished = false;             // Are we finished evolving?
    this.target = p;                   // Target phrase
    this.mutationRate = m;             // Mutation rate
    this.perfectScore = 1;
    this.best = '';
    this.population = [];
    
    for (var i = 0; i < num; i++) {
        this.population[i] = new DNA(this.target.length);
    }
    
    this.matingPool = [];

    // Fill our fitness array with a value for every member of the population
    this.calcFitness = function() {
        for (var i = 0; i < this.population.length; i++) {
            this.population[i].calcFitness(target);
        }
    }
  
    this.calcFitness();

    // Generate a mating pool
    this.naturalSelection = function() {
        var maxFitness = 0;
    
        // Clear the ArrayList
        this.matingPool = [];

        for (var i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > maxFitness) {
                maxFitness = this.population[i].fitness;
            }
        }

        // Based on fitness, each member will get added to the mating pool a certain number of times
        // a higher fitness = more entries to mating pool = more likely to be picked as a parent
        // a lower fitness = fewer entries to mating pool = less likely to be picked as a parent
        for (var i = 0; i < this.population.length; i++) {
            var fitness = map(this.population[i].fitness,0,maxFitness,0,1);
            
            // Arbitrary multiplier, could also use monte carlo method
            var n = Math.floor(fitness * 100);
            
            for (var j = 0; j < n; j++) {
                this.matingPool.push(this.population[i]);
            }
        }
    }

    // Create a new generation
    this.generate = function() {

        // Refill the population with children from the mating pool
        for (var i = 0; i < this.population.length; i++) {

            // Getting a random index for the pool
            var a = randomInt(0, this.matingPool.length - 1);
            var b = randomInt(0, this.matingPool.length - 1);

            // Picking a random item from the pool
            var partnerA = this.matingPool[a];
            var partnerB = this.matingPool[b];

            // Generating an offspring
            var child = partnerA.crossover(partnerB);

            // Mutate DNA
            child.mutate(this.mutationRate);

            // Add child to the population
            this.population[i] = child;
        }

        this.generations++;
    }


    this.getBest = function() {
        return this.best;
    }

    // Compute the current "most fit" member of the population
    this.evaluate = function() {
        var worldrecord = 0.0;
        var index = 0;

        for (var i = 0; i < this.population.length; i++) {

            if (this.population[i].fitness > worldrecord) {
                index = i;
                worldrecord = this.population[i].fitness;
            }
        }

        this.best = this.population[index].getPhrase();

        if (worldrecord === this.perfectScore) {
            this.finished = true;
        }
    }

    this.isFinished = function() {
        return this.finished;
    }

    this.getGenerations = function() {
        return this.generations;
    }

    // Compute average fitness for the population
    this.getAverageFitness = function() {
        var total = 0;
        
        for (var i = 0; i < this.population.length; i++) {
            total += this.population[i].fitness;
        }

        return total / (this.population.length);
    }

    this.allPhrases = function() {
        var everything = "";
        var displayLimit = Math.min(this.population.length,50);

        for (var i = 0; i < displayLimit; i++) {
            everything += this.population[i].getPhrase() + "<br>";
        }
        
        return everything;
    }
}