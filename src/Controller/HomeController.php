<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
     /**
     * @Route("/mercedes", name="mercedes_home")
     */
    public function mercedes()
    {
        return $this->render('cars/index.html.twig', [
          
        ]);
    }

     /**
     * @Route("/mercedes/bot", name="mercedes_bot")
     */
    public function mercedes_bot()
    {
        return $this->render('cars/bottas.html.twig', [
          
        ]);
    }
     /**
     * @Route("/mercedes/ham", name="mercedes_ham")
     */
    public function mercedes_ham()
    {
        return $this->render('cars/lewis.html.twig', [
          
        ]);
    }
     /**
     * @Route("/acc", name="acc_home")
     */
    public function acc()
    {
        return $this->render('acc2/index.html.twig', [
          
        ]);
    }
         /**
     * @Route("/spa", name="spa_home")
     */
    public function spa()
    {
        return $this->render('spa/index.html.twig', [
          
        ]);
    }
          /**
     * @Route("/spa/win", name="spa_win")
     */
    public function spawin()
    {
        return $this->render('spa/winners.html.twig', [
          
        ]);
    }
}
