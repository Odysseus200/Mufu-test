<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-9xl px-2 sm:px-4 lg:px-8">
      <div class="flex h-16 justify-between">
        <div flex px-2 lg:px-0>
          <div flex flex-shrink-0 items-center>
            <img
              class="block h-14 w-30 lg:hidden cursor-help"
              src="../assets/牧夫新logo.jpg"
              alt="牧夫天文"
            />
            <img
              class="hidden h-14 w-30 lg:block cursor-help"
              src="../assets/牧夫新logo.jpg"
              alt="牧夫天文"
            />
          </div>
          <div class="hidden lg:ml-8 lg:flex lg:space-x-8">
            <a
              href="#"
              id="none"
              class="hover:bg-#3882d6 hover:text-white inline-flex items-center border-b-2 border-indigo-500 px-1 py-1 pt-1 text-base font-medium text-gray-700"
              >首页</a
            >
            <a
              href="#"
              id="none"
              class="hover:bg-#3882d6 hover:text-white inline-flex items-center border-b-2 border-transparent px-1 py-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >发现</a
            >
            <a
              href="#"
              id="none"
              class="hover:bg-#3882d6 hover:text-white inline-flex items-center border-b-2 border-transparent px-1 py-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >社区</a
            >
            <a
              href="#"
              id="none"
              class="hover:bg-#3882d6 hover:text-white inline-flex items-center border-b-2 border-transparent px-1 py-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >圈子</a
            >
            <a
              href="#"
              id="none"
              class="hover:bg-#3882d6 hover:text-white inline-flex items-center border-b-2 border-transparent px-1 py-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >专栏</a
            >
          </div>
        </div>
        <div
          class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"
        >
          <div class="w-full max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only">搜索</label>
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <MagnifyingGlassIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                class="caret-#ec7259 block w-11/12 rounded-3xl border border-gray-300 bg-#ebe6e6 py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-200 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-200 sm:text-sm"
                placeholder="搜索作品、活动、摄影师"
                type="search"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-200"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:ml-4 lg:flex lg:items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-4 flex-shrink-0">
            <div>
              <a
                href="#"
                id="none"
                class="hover:bg-#ebe6e6 hover:text-white inline-flex items-center border-b-2 border-transparent px-1 py-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >登录</a
              >
              |
              <a
                href="#"
                id="none"
                class="hover:bg-#ebe6e6 hover:text-white inline-flex items-center border-b-2 border-transparent px-1 py-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >注册</a
              >
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="space-y-1 pt-2 pb-3">
        <DisclosureButton
          as="a"
          href="#"
          class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          >首页</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >发现</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >社区</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >圈子</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >专栏</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>

<style lang="css" scoped>
#none {
  text-decoration: none;
}
</style>
