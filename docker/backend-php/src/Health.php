<?php

namespace App;

final class Health
{
    public function status(): string
    {
        return 'ok';
    }
}

// oct rerun backend-php warm 1
