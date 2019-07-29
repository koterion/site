<?php
namespace App\Console\Commands\Common;

use Illuminate\Console\Command;

class SeedModelCommand extends Command
{
    protected $nameSpace = "App\\Models\\";
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed {model} {count}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Model seeding command.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $className = $this->nameSpace . ucfirst($this->argument('model'));
        if(class_exists($className)){
            $bar = $this->output->createProgressBar($count = $this->argument('count'));
            for ($i = 0; $i < $count; $i++) {
                factory($className)->create();
                $bar->advance();
            }
            $bar->finish();
        }else{
            $this->alert('This class is not a model...');
        }
    }
}